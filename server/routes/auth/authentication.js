const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/user', async (req, res) => {
    try {
        const { name, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        await req.db.query(
            `INSERT INTO users (name, password)
                VALUES (:name, :password)`,
            {
                name, hashedPassword
            }
        );

        res.status(200).json({success: true, message: `User created!`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { name, sentPassword } = req.body;

        const result = req.db.query(
            `SELECT password FROM users
                WHERE name = :name`,
            {
                name
            }
        );

        if(result[0].length === 0) {
            return res.status(401).json({success: false, message: `User not found.`, data: null});
        }

        const { hashedPassword } = result[0][0];

        if(await bcrypt.compare(sentPassword, hashedPassword)) {
            const accessToken = jwt.sign({name}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'});
            const refreshToken = jwt.sign({name}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1w'});

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 
            });
            
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000 
            });

            res.status(200).json({success: true, message: `Logged in!`, data: accessToken});
        }
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
});

module.exports = router;
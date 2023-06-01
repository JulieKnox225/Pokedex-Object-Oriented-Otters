const getAllPokemon = async (req, res) => {
    try {
        const result = await req.db.query(
            `SELECT * FROM pokedex`
        );
        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getPokemonById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await req.db.query(
            `SELECT * FROM pokedex
                WHERE id = :id`,
            {
                id
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getPokemonByName = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await req.db.query(
            `SELECT * FROM pokedex
                WHERE name = :name`,
            {
                name
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const getPokemonByType = async (req, res) => {
    try {
        const { type } = req.params;
        const result = await req.db.query(
            `SELECT * FROM pokedex
                WHERE type = :type`,
            {
                type
            }
        );

        res.status(200).json({success: true, message: `Data retrieved`, data: result[0]});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const createPokemon = async (req, res) => {
    try {
        const { name, types, total, hp, attack, defense, spAtk, spDef, speed } = req.body;
        
        await req.db.query(
            `INSERT INTO pokedex (Name, Types, Total, Hp, Attack, Defense, spAtk, spDef, Speed)
                VALUES (:name, :types, :total, :hp, :attack, :defense, :spAtk, :spDef, :speed)`,
            {
                name, 
                types, 
                total, 
                hp, 
                attack, 
                defense, 
                spAtk, 
                spDef, 
                speed
            }
        );

        res.status(200).json({success: true, message: `Successfully added data`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

const updatePokemon = async (req, res) => {
    try {
        const { id } = req.params;
        
        await req.db.query(
            ``
        )

        res.status(200).json({success: true, message: `Successfully updated data`, data: null});
    } catch (error) {
        res.status(400).json({success: false, message: error, data: null});
    }
};

module.exports = {
    getAllPokemon,
    getPokemonById,
    getPokemonByName,
    getPokemonByType,
    createPokemon,
    updatePokemon
}
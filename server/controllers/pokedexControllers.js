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

/** 
 * This should be able to replace all other getPokemonBy____ 

        const { search, type } = req.query;
        let result = [];
        if(search) {
            switch (type) {
                case 'name':
                    result = await req.db.query(`SELECT * FROM plants WHERE name LIKE '%${search}%'`);
                    break;
                case 'nickname':
                    result = await req.db.query(`SELECT * FROM plants WHERE nickname LIKE '%${search}%'`);
                    break;
                case 'months_to_plant':
                    result = await req.db.query(`SELECT * FROM plants WHERE months_to_plant LIKE '%${search}%'`);
                    break;
                case 'sun_req':
                    result = await req.db.query(`SELECT * FROM plants WHERE sun_req = :search`, { search });
                    break;
                case 'planting_zone':
                    result = await req.db.query(`SELECT * FROM plants WHERE planting_zone = :search`, { search });
                    break;
                case 'sow_temp_range':
                    result = await req.db.query(`SELECT * FROM plants WHERE sow_temp_range LIKE '%${search}%'`);
                    break;
                case 'fertilizer_NPK':
                    result = await req.db.query(`SELECT * FROM plants WHERE fertilizer_NPK = :search`, { search });
                    break;
                case 'description':
                    result = await req.db.query(`SELECT * FROM plants WHERE description LIKE '%${search}%'`);
                    break;
                default:
                    result = await req.db.query(`SELECT * FROM plants WHERE :type = :search`, { type, search });
                    break;
            }
        }
        else {
            result = await req.db.query(`SELECT * FROM plants`);
        }

        if(result[0].length === 0) {
            result[0].push({ name: 'Sorry none found!' });
        }

        res.status(200).json(result[0]);
        
 * Ideally, I wanted to do something similar to the following. However, type is sent to MySQL with '' around the word
    which causes errors :/
        const wordsToSearchWithLike = ['name', etc]
        ...
        case 'name':
            result = await req.db.query(`SELECT * FROM plants WHERE :type LIKE '%${search}%'`, { type });
            break;
        default:
            result = await req.db.query(`SELECT * FROM plants WHERE :type = :search`, { type, search });
            break;
        

*/



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
        const bodyValuesArray = Object.entries(req.body);

        for(let i = 0; i < bodyValuesArray.length; i++) {
            await req.db.query(
                `UPDATE pokedex SET property = :value
                    WHERE id = :id`,
                {
                    property: bodyValuesArray[i][0],
                    value: bodyValuesArray[i][1],
                    id
                }
            )
        }

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
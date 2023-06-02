// Update note: Still need to work on generating 100 pokemon without 1:1 duplicates. 
// Suggestions are welcome!
import mysql from 'mysql';
import fs from 'fs';

class Pokemon {
  constructor(pokedexId, name, types, total, hp, attack, defense, spAtk, spDef, speed) {
    this.pokedexId = pokedexId;
    this.name = name;
    this.types = types;
    this.total = total;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spAtk = spAtk;
    this.spDef = spDef;
    this.speed = speed;
  }

  toString() {
    return `ID: ${this.pokedexId}\nName: ${this.name}\nType: ${this.types}\nTotal: ${this.total}\nHP: ${this.hp}\nAttack: ${this.attack}\nDefense: ${this.defense}\nSp. Atk: ${this.spAtk}\nSp. Def: ${this.spDef}\nSpeed: ${this.speed}`;
  }
}

// Function to generate a random Latin name for the Pokemon
function generateRandomName(usedNames) {
  const latinNames = ["Acer", "Aquila", "Bellator", "Ignis", "Nix", "Terra", "Ventus", "Flamma", "Silex", "Fulgur"];
  const availableNames = latinNames.filter(name => !usedNames.includes(name));
  return availableNames[Math.floor(Math.random() * availableNames.length)];
}

// Function to generate a random Pokemon without duplicate names
function generateRandomPokemon(pokedexId, usedNames) {
  const name = generateRandomName(usedNames);
  const types = generateRandomTypes(); // Generate random types
  const total = 800;

  // Randomly generate stats
  const getRandomStat = () => Math.floor(Math.random() * 256); // Generates a random integer from 0 to 255
  const hp = getRandomStat();
  const attack = getRandomStat();
  const defense = getRandomStat();
  const spAtk = getRandomStat();
  const spDef = getRandomStat();
  const speed = getRandomStat();

  // Create a Pokemon object
  return new Pokemon(pokedexId, name, types, total, hp, attack, defense, spAtk, spDef, speed);
}

// Function to generate random types for the Pokemon
function generateRandomTypes() {
  const types = ["Grass", "Fire", "Water", "Electric", "Rock", "Psychic", "Ghost", "Ice", "Dragon", "Flying"];
  const numTypes = Math.floor(Math.random() * 2) + 1; // Generate 1 or 2 types

  // Shuffle and select random types
  const shuffledTypes = types.sort(() => Math.random() - 0.5);
  return shuffledTypes.slice(0, numTypes);
}

// Create MySQL connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "bvtpassword", 
  database: "pokedexDB", 
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL.');

  // Create table for each generation
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS generation1 (
      pokedexId INT PRIMARY KEY,
      name VARCHAR(255),
      types VARCHAR(255),
      total INT,
      hp INT,
      attack INT,
      defense INT,
      spAtk INT,
      spDef INT,
      speed INT
    )`;

  // Execute create table query
  connection.query(createTableQuery, err => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    }

    console.log('Table created successfully.');

    // Generate 100 Pokemon
    const usedNames = [];
    const pokemonList = [];

    for (let i = 1; i <= 100; i++) {
      const pokemon = generateRandomPokemon(i.toString().padStart(3, '0'), usedNames);
      usedNames.push(pokemon.name);
      pokemonList.push(pokemon);
      console.log(pokemon.toString());

      // Save the Pokemon to the database
      const insertQuery = `
        INSERT INTO generation1 (pokedexId, name, types, total, hp, attack, defense, spAtk, spDef, speed)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      connection.query(
        insertQuery,
        [
          pokemon.pokedexId,
          pokemon.name,
          pokemon.types.join(', '),
          pokemon.total,
          pokemon.hp,
          pokemon.attack,
          pokemon.defense,
          pokemon.spAtk,
          pokemon.spDef,
          pokemon.speed
        ],
        err => {
          if (err) {
            console.error('Error inserting Pokemon:', err);
          }
        }
      );
    }

    // Close the MySQL connection
    connection.end();

    // Save the Pokemon output to a file
    const outputFile = 'pokemon_output.txt';
    const outputText = pokemonList.map(pokemon => pokemon.toString()).join('\n\n');

    fs.writeFile(outputFile, outputText, err => {
      if (err) {
        console.error('Error saving output file:', err);
      } else {
        console.log(`Pokemon output saved to "${outputFile}".`);
      }
    });
  });
});

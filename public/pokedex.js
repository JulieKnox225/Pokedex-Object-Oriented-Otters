const sqlite3 = require('sqlite3').verbose();

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

// Create SQLite database and tables
const db = new sqlite3.Database('pokemon.db');

// Create table for each generation
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS generation1 (
    pokedexId INTEGER PRIMARY KEY,
    name TEXT,
    types TEXT,
    total INTEGER,
    hp INTEGER,
    attack INTEGER,
    defense INTEGER,
    spAtk INTEGER,
    spDef INTEGER,
    speed INTEGER
  )`;

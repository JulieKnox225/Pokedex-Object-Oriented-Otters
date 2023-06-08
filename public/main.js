// git remote add origin https://github.com/JulieKnox225/Pokedex-Object-Oriented-Otters.git
// git branch -M main
// git push -u origin main

//           Please note that this code may be changed if you wish. Not everything here is final, it may not even work as intended either, in which I can fix

// import to database
const mysql = require("mysql");

// create a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "bvtpassword", 
  database: "alumniDatabase", 
});

// connect to the database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
  } else {
    console.log("Connected to the database.");
    createAlumniTable();
  }
});

// it is around here when the columns do not separate into their own separate categories. 

function createAlumniTable() {
  const query = `CREATE TABLE IF NOT EXISTS alumni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    contactInfo VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    achievements TEXT,
    projects TEXT,
    skills TEXT,
    recommendations TEXT
  )`;

  connection.query(query, (error, result) => {
    if (error) {
      console.error("Error creating alumni table: ", error);
    } else {
      console.log("Alumni table created successfully.");
      saveAlumniData();
    }
  });
}

// Alumni class with their traits
class Alumni {
  constructor(
    fullName,
    contactInfo,
    degree,
    achievements,
    projects,
    skills,
    recommendations
  ) {
    this.fullName = fullName;
    this.contactInfo = contactInfo;
    this.degree = degree;
    this.achievements = achievements || []; // Ensure default empty arrays if not provided
    this.projects = projects || [];
    this.skills = skills || [];
    this.recommendations = recommendations || [];
  }

  // saving the traits to their respective identities
  saveToDatabase() {
    const query =
      "INSERT INTO alumni (fullName, contactInfo, degree, achievements, projects, skills, recommendations) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      this.fullName,
      this.contactInfo,
      this.degree,
      this.achievements.join(", "),
      this.projects.join(", "),
      this.skills.join(", "),
      this.recommendations.join(", "),
    ];

    connection.query(query, values, (error, result) => {
      if (error) {
        console.error("Error inserting data into the database: ", error);
      } else {
        console.log("Data inserted successfully.");
      }
    });
  }
}

// These are examples, fake information that serves as a test to push into the database

const alumni1 = new Alumni(
  "John Broe",
  "john.broe@aol.com",
  "Bachelor's Degree",
  ["Award of Excellence 2022", "Developed API used by Google"],
  ["Project blah blah filler filler xddxdxxddxd "],
  ["Highly recommendo by teachers and colleagues"]
);

const alumni2 = new Alumni(
  "Jayne Smiff",
  "jayne.smiff@hotmail.com",
  "Master's Degree",
  ["Best Leadership Award 2020", "Developed new OS by herself"],
  ["Project Alpha: Created machine learning model for therapy"],
  ["Ruby, PhP, Communication"],
  ["Strong recommendations from the industry for excellent development skills"]
);

// save alumni data to the database
function saveAlumniData() {
  alumni1.saveToDatabase();
  alumni2.saveToDatabase();

  // close the database connection when done
  connection.end();
}



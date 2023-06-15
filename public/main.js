// Import necessary libraries
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1", // Database host
  port: 3306, // Database port
  user: "root", // Database username
  password: "bvtpassword", // Database password
  database: "alumniDatabase", // Database name
});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error); // Log connection error
  } else {
    console.log("Connected to the database."); // Log successful connection
  }
});

// Alumni class with their traits
class Alumni {
  constructor(fullName, contactInfo, degree, achievements, projects, skills, recommendations) {
    this.fullName = fullName; // Full name of the alumni
    this.contactInfo = contactInfo; // Contact information of the alumni
    this.degree = degree; // Degree obtained by the alumni
    this.achievements = achievements || []; // Array of achievements (optional)
    this.projects = projects || []; // Array of projects (optional)
    this.skills = skills || []; // Array of skills (optional)
    this.recommendations = recommendations || []; // Array of recommendations (optional)
  }

  // Save the traits to their respective identities
  saveToDatabase() {
    const query =
      "INSERT INTO alumni (fullName, contactInfo, degree, achievements, projects, skills, recommendations) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      this.fullName,
      this.contactInfo,
      this.degree,
      this.achievements.join(", "), // Convert achievements array to a string
      this.projects.join(", "), // Convert projects array to a string
      this.skills.join(", "), // Convert skills array to a string
      this.recommendations.join(", "), // Convert recommendations array to a string
    ];

    connection.query(query, values, (error, result) => {
      if (error) {
        console.error("Error inserting data into the database: ", error); // Log insert error
      } else {
        console.log("Data inserted successfully."); // Log successful data insertion
      }
    });
  }
}

// Create instances of the Alumni class with information
const alumni1 = new Alumni(
  "John Broe",
  "john.broe@aol.com",
  "Bachelor's Degree",
  ["Award of Excellence 2022", "Developed API used by Google"], // Array of achievements
  ["Project blah blah filler filler xddxdxxddxd "], // Array of projects
  ["Highly recommendo by teachers and colleagues"], // Array of skills
);

const alumni2 = new Alumni(
  "Jayne Smiff",
  "jayne.smiff@hotmail.com",
  "Master's Degree",
  ["Best Leadership Award 2020", "Developed new OS by herself"], // Array of achievements
  ["Project Alpha: Created machine learning model for therapy"], // Array of projects
  ["Ruby, PhP, Communication"], // Array of skills
  ["Strong recommendations from the industry for excellent development skills"], // Array of recommendations
);

// ...
// Additional instances of the Alumni class

// Save alumni information to the database
alumni1.saveToDatabase();
alumni2.saveToDatabase();
// ...

// Close the database connection when done
connection.end();

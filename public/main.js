// git remote add origin https://github.com/JulieKnox225/Pokedex-Object-Oriented-Otters.git
// git branch -M main
// git push -u origin main

//                       Please note that this code may be changed if you wish. Not everything here is final, it may not even work as intended either, in which I can fix

// import to database
// import the necessary libraries
const mysql = require("mysql");

// create a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1", 
  port: 3306, // Add a comma after host
  user: "root",
  password: 'passss', // sadly I used my personal password so ask me (Jonah)
  database: "database" // It will be under the schema "alumni"
});

// connect to the database
connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the database: ", error);
    } else {
      console.log("Connected to the database.");
    }
  });
  
  // Alumni class with their traits
  class Alumni {
    constructor(fullName, contactInfo, degree, achievements, projects, skills, recommendations) {
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
        const query = "INSERT INTO alumni (fullName, contactInfo, degree, achievements, projects, skills, recommendations) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [this.fullName, this.contactInfo, this.degree, this.achievements.join(", "), this.projects.join(", "), this.skills.join(", "), this.recommendations.join(", ")];
    
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
  alumni1.saveToDatabase();
  alumni2.saveToDatabase();
  
  // close the database connection when done
  connection.end();

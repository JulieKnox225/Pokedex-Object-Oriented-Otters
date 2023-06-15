// Import necessary libraries
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "bvtpassword",
  database: "alumniDatabase",
});

// Connect to the database
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
    this.achievements = achievements || [];
    this.projects = projects || [];
    this.skills = skills || [];
    this.recommendations = recommendations || [];
  }

  // Save the traits to their respective identities
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

// Create instances of the Alumni class with information
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
// add information these alumnis PLEASEE PRETTY PLEASEEEEEE
const alumni3 = new Alumni(
  "Jackson Morrow",
  "jacksonmorrow@bvt.com",
  "Bachelor's Degree",
  ["Employee of the Month", "Youngest Senior Dev in Apple"],
  ["Fill this in please "],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

const alumni4 = new Alumni(
  "Alumni 4 Full Name",
  "alumni4@example.com",
  "Master's Degree",
  ["Achievement 1", "Achievement 2"],
  ["Project 1", "Project 2"],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

const alumni5 = new Alumni(
  "Alumni 5 Full Name",
  "alumni5@example.com",
  "Bachelor's Degree",
  ["Achievement 1", "Achievement 2"],
  ["Project 1", "Project 2"],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

const alumni6 = new Alumni(
  "Alumni 6 Full Name",
  "alumni6@example.com",
  "Master's Degree",
  ["Achievement 1", "Achievement 2"],
  ["Project 1", "Project 2"],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

const alumni7 = new Alumni(
  "Alumni 7 Full Name",
  "alumni7@example.com",
  "Bachelor's Degree",
  ["Achievement 1", "Achievement 2"],
  ["Project 1", "Project 2"],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

const alumni8 = new Alumni(
  "Alumni 8 Full Name",
  "alumni8@example.com",
  "Master's Degree",
  ["Achievement 1", "Achievement 2"],
  ["Project 1", "Project 2"],
  ["Skill 1", "Skill 2"],
  ["Recommendation 1", "Recommendation 2"]
);

alumni1.saveToDatabase();
alumni2.saveToDatabase();
alumni3.saveToDatabase();
alumni4.saveToDatabase();
alumni5.saveToDatabase();
alumni6.saveToDatabase();
alumni7.saveToDatabase();
alumni8.saveToDatabase();

// Close the database connection when done
connection.end();

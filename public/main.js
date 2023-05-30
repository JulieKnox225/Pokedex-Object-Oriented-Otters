// git remote add origin https://github.com/JulieKnox225/Pokedex-Object-Oriented-Otters.git
// git branch -M main
// git push -u origin main

//                       Please note that this code may be changed if you wish. Not everything here is final, it may not even work as intended either, in which I can fix

// import to database
const database = require("databaseLibrary");


// Alumni class with their traits
class Alumni {
    constructor(fullName, contactInfo, degree, achievements, projects, skills, recommendations) {
        this.fullName = fullName;
        this.contactInfo = contactInfo;
        this.degree = degree;
        this.achievements = achievements;
        this.projects = projects;
        this.skills = skills;
        this.recommendations = recommendations;
    }

    // saving the traits to their respective identities
    saveToDatabase() {
        database.insert("alumni", {
            fullName: this.fullName, 
            contactInfo: this.contactInfo,
            degree: this.degree,
            achievements: this.achievements,
            projects: this.projects,
            skills: this.skills,
            recommendations: this.recommendations
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
alumni1.saveToDatabase();
alumni2saveToDatabase();
    
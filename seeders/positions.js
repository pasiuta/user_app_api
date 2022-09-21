const db = require("../db");
const positions = [
    {
        "position": "security analyst",
    },
    {
        "position": "nurse practitioner",
    },
    {
        "position": "software developer",
    },
    {
        "position": "data scientist",
    },
    {
        "position": "financial manager",
    },
    {
        "position": "lawyer",
    },
    {
        "position": "physician",
    },
    {
        "position": "it manager",
    },
    {
        "position": "management analyst",
    },
    {
        "position": "recruitment consultant",
    },
    {
        "position": "full-stack developer",
    },
    {
        "position": "project manager",
    },

]
for (let i = 0; i < positions.length; i++) {
    db.query(`INSERT INTO positions (position)
              values ($1) RETURNING *`,
        [positions[i].position])
    console.log(`field with email: ${positions[i].position}  has been filled`);
}

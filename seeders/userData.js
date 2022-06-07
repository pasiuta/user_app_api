const db = require("../db");
const userData = [
    {
        "name": "James",
        "email": "James.williams@gmail.com",
        "phone": "+380956540023",
        "password": "james.williams1999",
        "positionId": '1'
    },
    {
        "name": "Robert",
        "email": "Robert.Hodge@gmail.com",
        "phone": "+380978540023",
        "password": "robert.hodge1998",
        "positionId": '2'
    },
    {

        "name": "John",
        "email": "john.stanley@gmail.com",
        "phone": "+380948540023",
        "password": "john.stanley1997",
        "positionId": '3'
    },
    {

        "name": "Pamela",
        "email": "pamela.hartman@gmail.com",
        "phone": "+380998040023",
        "password": "pamela.hartman1996",
        "positionId": '4'
    },
    {

        "name": "Daniel",
        "email": "daniel.mcfarland@gmail.com",
        "phone": "+380978140023",
        "password": "daniel.mcfarland1977",
        "positionId": '5'
    },
    {

        "name": "Michael",
        "email": "michael.hanson@gmail.com",
        "phone": "+380923540023",
        "password": "michael.hanson1991",
        "positionId": '6'
    },
    {

        "name": "Julie",
        "email": "julie.fletcher@gmail.com",
        "phone": "+380918520023",
        "password": "julie.fletcher1997",
        "positionId": '4'
    },
    {

        "name": "Melissa",
        "email": "melissa.ho@gmail.com",
        "phone": "+380948540023",
        "password": "melissa.ho19971",
        "positionId": '7'
    }, {

        "name": "Jordan",
        "email": "jordan.davis@gmail.com",
        "phone": "+380942543023",
        "password": "jordan.davis1997",
        "positionId": '7'
    },
    {

        "name": "Samantha",
        "email": "samantha.lewis@gmail.com",
        "phone": "+380978540023",
        "password": "samantha.lewis1996",
        "positionId": '8'
    },
    {

        "name": "Jacob",
        "email": "jacob.graves@gmail.com",
        "phone": "+380958540021",
        "password": "jacob.graves1994",
        "positionId": '9'
    },
    {

        "name": "Jason",
        "email": "jason.clark@gmail.com",
        "phone": "+380988540223",
        "password": "jason.clark1967",
        "positionId": '10'
    },
    {

        "name": "Andrew",
        "email": "andrew.howard@gmail.com",
        "phone": "+380918340023",
        "password": "andrew.howard1997",
        "positionId": '11'
    },
    {

        "name": "Angela",
        "email": "angela.harmon@gmail.com",
        "phone": "+380938560023",
        "password": "angela.harmon1993",
        "positionId": '12'
    },
    {
        "name": "Colin",
        "email": "colin.gill@gmail.com",
        "phone": "+380948540023",
        "password": "colin.gill1997",
        "positionId": '4'
    }

]
for (let i = 0; i < userData.length; i++) {
    db.query(`INSERT INTO users (name, email, phone, password,positionId)
              values ($1, $2, $3, $4,$5) RETURNING *`,
        [userData[i].name, userData[i].email, userData[i].phone, userData[i].password,userData[i].positionId])
    console.log(`field with email: ${userData[i].email}  has been filled`);
}


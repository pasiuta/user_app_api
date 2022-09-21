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
    },
    {
        "name": "Brown",
        "email": "Brown.Stevenson@gmail.com",
        "phone": "+380948540024",
        "password": "Brown.Stevenson1977",
        "positionId": '5'
    },
    {
        "name": "Wilson",
        "email": "Wilson.Wood@gmail.com",
        "phone": "+380948540034",
        "password": "Wilson.Wood1978",
        "positionId": '6'
    },
    {
        "name": "THOMSON",
        "email": "THOMSON.SUTHERLAND@gmail.com",
        "phone": "+380948540054",
        "password": "THOMSON.SUTHERLAND1979",
        "positionId": '5'
    },
    {
        "name": "ROBERTSON",
        "email": "ROBERTSON.CRAIG@gmail.com",
        "phone": "+380948540094",
        "password": "ROBERTSON.CRAIG1997",
        "positionId": '1'
    },
    {
        "name": "CAMPBELL",
        "email": "CAMPBELL.WRIGHT@gmail.com",
        "phone": "+380948540004",
        "password": "CAMPBELL.WRIGHT1970",
        "positionId": '10'
    },
    {
        "name": "ANDERSON",
        "email": "ANDERSON.KENNEDY@gmail.com",
        "phone": "+380948540074",
        "password": "ANDERSON.KENNEDY1967",
        "positionId": '2'
    },
    {
        "name": "MACDONALD",
        "email": "MACDONALD.JONES@gmail.com",
        "phone": "+380998540224",
        "password": "MACDONALD.JONES1999",
        "positionId": '9'
    },
    {
        "name": "CLARK",
        "email": "CLARK.JOHNSTONE@gmail.com",
        "phone": "+380942540024",
        "password": "CLARK.JOHNSTONE1957",
        "positionId": '12'
    },
    {
        "name": "ROSS",
        "email": "ROSS.WATT@gmail.com",
        "phone": "+380968540024",
        "password": "ROSS.WATT2000",
        "positionId": '3'
    },
    {
        "name": "PATERSON",
        "email": "PATERSON.MILNE@gmail.com",
        "phone": "+380948540004",
        "password": "PATERSON.MILNE1970",
        "positionId": '2'
    },
    {
        "name": "MORRISON",
        "email": "MORRISON.DICKSON@gmail.com",
        "phone": "+380948545024",
        "password": "MORRISON.DICKSON2001",
        "positionId": '5'
    },
    {
        "name": "FRASER",
        "email": "FRASER.KING@gmail.com",
        "phone": "+380948544024",
        "password": "FRASER.KING1987",
        "positionId": '1'
    },
    {
        "name": "HENDERSON",
        "email": "HENDERSON.MILLAR@gmail.com",
        "phone": "+380918540024",
        "password": "HENDERSON.MILLAR1970",
        "positionId": '8'
    },
    {
        "name": "JOHNSTON",
        "email": "JOHNSTON.CUNNINGHAM@gmail.com",
        "phone": "+380948548824",
        "password": "JOHNSTON.CUNNINGHAM1997",
        "positionId": '6'
    },
    {
        "name": "HAMILTON",
        "email": "HAMILTON.SINCLAIR@gmail.com",
        "phone": "+380948548924",
        "password": "HAMILTON.SINCLAIR1997",
        "positionId": '2'
    },
    {
        "name": "GRAHAM",
        "email": "GRAHAM.WILLIAMSON@gmail.com",
        "phone": "+380948540014",
        "password": "GRAHAM.WILLIAMSON1977",
        "positionId": '8'
    },
    {
        "name": "SIMPSON",
        "email": "SIMPSON.MCGREGOR@gmail.com",
        "phone": "+380948510024",
        "password": "SIMPSON.MCGREGOR1987",
        "positionId": '7'
    },
    {
        "name": "DUNCAN",
        "email": "DUNCAN.FLEMING@gmail.com",
        "phone": "+380918540024",
        "password": "DUNCAN.Stevenson1997",
        "positionId": '9'
    },{
        "name": "KELLY",
        "email": "KELLY.CHRISTIE@gmail.com",
        "phone": "+380948540124",
        "password": "KELLY.CHRISTIE1990",
        "positionId": '4'
    },
    {
        "name": "BELL",
        "email": "BELL.DONALDSON@gmail.com",
        "phone": "+380948540064",
        "password": "BELL.DONALDSON1997",
        "positionId": '10'
    },{
        "name": "MACKENZIE",
        "email": "MACKENZIE.ALEXANDER@gmail.com",
        "phone": "+380948540024",
        "password": "MACKENZIE.ALEXANDER1997",
        "positionId": '8'
    },
    {
        "name": "ALLAN",
        "email": "ALLAN.WILLIAMS@gmail.com",
        "phone": "+380958540024",
        "password": "ALLAN.WILLIAMS1980",
        "positionId": '11'
    },{
        "name": "MACLEOD",
        "email": "MACLEOD.MCINTYRE@gmail.com",
        "phone": "+380948340024",
        "password": "MACLEOD.MCINTYRE1983",
        "positionId": '2'
    },
    {
        "name": "MCLEAN",
        "email": "MCLEAN.FINDLAY@gmail.com",
        "phone": "+380948542924",
        "password": "MCLEAN.FINDLAY1985",
        "positionId": '11'
    },{
        "name": "RUSSELL",
        "email": "RUSSELL.JAMIESON@gmail.com",
        "phone": "+380988540024",
        "password": "RUSSELL.JAMIESON1993",
        "positionId": '9'
    },{
        "name": "MARTIN",
        "email": "MARTIN.MCKAY@gmail.com",
        "phone": "+380948540084",
        "password": "MARTIN.MCKAY1998",
        "positionId": '1'
    },{
        "name": "HAMILTON",
        "email": "HAMILTON.HUGHES@gmail.com",
        "phone": "+380948545024",
        "password": "HAMILTON.HUGHES1981",
        "positionId": '4'
    },{
        "name": "YOUNG",
        "email": "YOUNG.MURPHY@gmail.com",
        "phone": "+380948541224",
        "password": "YOUNG.MURPHY1997",
        "positionId": '5'
    },
    ,{
        "name": "SCOTT",
        "email": "SCOTT.BURNS@gmail.com",
        "phone": "+380948540424",
        "password": "SCOTT.BURNS1977",
        "positionId": '12'
    },
    ,{
        "name": "PATERSON",
        "email": "PATERSON.WATT@gmail.com",
        "phone": "+380948541124",
        "password": "PATERSON.WATT1947",
        "positionId": '11'
    },

]
for (let i = 0; i < userData.length; i++) {
    db.query(`INSERT INTO users (name, email, phone, password,positionId)
              values ($1, $2, $3, $4,$5) RETURNING *`,
        [userData[i].name, userData[i].email, userData[i].phone, userData[i].password,userData[i].positionId])
    console.log(`field with email: ${userData[i].email}  has been filled`);
}


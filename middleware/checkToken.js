const db = require("../db");
const moment = require("moment");

async function verifyToken(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    const queryResults = await db.query(`SELECT token
                                         FROM token
    `)
    if (!queryResults) {
        return res.status(403).send({
            message: "token not correct!"
        });
    }
    let tokenQuery = await db.query(`SELECT created_at
                                     FROM token
    `)
    const tokenRegisterTime = moment.unix(tokenQuery.rows[0].created_at / 1000).format("YYYY MM D HH:mm:ss a");
    const dateNow = moment().format('YYYY MM D HH:mm:ss a');

    function getTimeDiff(start, end) {

        return moment.duration(moment(end, "YYYY MM D HH:mm:ss a").diff(moment(start, "YYYY MM D HH:mm:ss a")));
    }

    let diff = getTimeDiff(tokenRegisterTime, dateNow)
    console.log(`token exists ${diff.days()} days ${diff.hours()} hours ${diff.minutes()} minutes`);

    const diffDays = diff.days()
    const diffHours = diff.hours();
    const diffMinutes = diff.minutes();

    if (diffDays > 0 || diffHours > 0 || diffMinutes > 40) {

        return res.status(403).send({
            message: "token has expired!"
        });
    }
    next()
}

module.exports = verifyToken;
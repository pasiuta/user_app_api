require("dotenv").config();
const db = require("../db");
let {v4: uuidv4} = require('uuid');

class AuthController {
    async getToken(req, res) {
        const date = +new Date();
        const token = uuidv4();
        await db.query(`INSERT
                        INTO token (token, created_at)
                        VALUES ($1, $2) RETURNING *`, [token, date]);

        res.json({
            "success": true,
            "token": token
        })
    }

}

module.exports = new AuthController()
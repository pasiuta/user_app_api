const db = require('../db')
const bcrypt = require('bcrypt')
const {userValidationCreate, userValidationGet, usersValidationGet} = require("../validation/user");

class UserController {
    async createUser(req, res) {
        const {name, email, phone, password, positionId} = req.body
        const {error} = userValidationCreate(req.body);

        if (error) {
            return res.status(400).json({
                error: error.message,
            });
        }

        const queryUser = await db.query(`SELECT *
                                          FROM users
                                          WHERE email = $1;`, [email]);
        const user = queryUser.rows[0];
        if (user) {
            return res.status(400).json({
                error: "User with current email already exist"
            });
        }

        const hashPassword = await bcrypt.hash(password, 7)
        const newUser = await db.query(`INSERT INTO users (name, email, phone, password, positionId, imagePath)
                                        values ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, email, phone, hashPassword, positionId, req.filename])
        const createdUser = newUser.rows[0];
        delete createdUser.password;
        res.json(createdUser);
    }

    async getUser(req, res) {
        const id = req.params.id;
        const {error} = userValidationGet({id});
        if (error) {
            return res.status(400).json({
                error: error.message,
            });
        }
        const user = await db.query(`
            SELECT
                   "users"."name",
                   "users"."email",
                   "users"."phone",
                   "users"."imagepath",
                   "users"."positionid",
                   "positions"."position",
                   "positions"."id"
            FROM "users"
                     INNER JOIN "positions" ON "positions"."id" = "users"."positionid"
            where "users"."id" = $1`, [id]);
        if (!user.rows[0]) {
            return res.status(404).json({
                error: "user not found",
            });
        }
        console.log(user.rows[0]);
        res.json(user.rows[0]);
    }

    async getUsers(req, res) {
        let {page, size} = req.query;
        const {error} = usersValidationGet(req.query);
        if (!page && !size) {
            page = 1;
            size = 5;
        }
        if (size >= 10) {
            size = 10;
        }
        if (error) {
            return res.status(400).json({
                error: error.message,
            });
        }

        const users = await db.query(`SELECT *
                                      FROM users
                                      ORDER BY "users"."id" LIMIT $2
                                      OFFSET (($1 - 1) * $2)`, [page, size]);

        res.status(200).json(users.rows);
    }

}

module.exports = new UserController();

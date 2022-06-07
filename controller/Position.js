const db = require("../db")

class PositionController {
    async getUserPositions(req, res) {
        const positions = await db.query('SELECT * FROM positions');
        if (!positions.rows[0]) {
            return res.status(404).json({
                error: "position not found",
            });
        }

        res.json(positions.rows);

    }
}
module.exports = new PositionController()
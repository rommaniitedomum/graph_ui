const database = require("../database/db");

exports.getCustomers = async (req, res) => {
    try {
        const users = await database.pool.query("SELECT * FROM customers");
        return res.status(200).json(result.rows);
    } catch (error) {
        return res.status(500).json({msg: "Get customers Error" + error });
        
    }
};
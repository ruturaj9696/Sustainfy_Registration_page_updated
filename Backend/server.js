const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'registration'
})

app.post('/registration', (req, res) => {
    const sql = "INSERT INTO data (`name`,`email`,`plant_details`,`plant_capacity`,`epi`,`power_consumption_12`,`power_consumption_5`) Values (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.plant_details,
        req.body.plant_capacity,
        req.body.epi,
        req.body.power_consumption_12,
        req.body.power_consumption_5,
    ]

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })
})

app.listen(8081, () => {
    console.log('Listening....')
})
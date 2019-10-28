var router = require("express").Router();
var util = require('util');

var connectDB = require("../middleware/DBconnection.middleware");

const queryDB = util.promisify(connectDB.query).bind(connectDB);

//render page
router.get("/", async (req, res, next) => {

    try {

        const competitions = await queryDB("SELECT * FROM wca_db.competitions order by `year` desc, `month` desc, `day` desc;")

        res.render('page/home', {
            competitionLatestName: competitions[0].name,
            competitionLatestID: competitions[0].id,
        });

        // console.log(req.query.page );
    } catch (error) {
        console.error(error);
    }
});

module.exports = router
var router = require("express").Router();
var util = require('util');

var connectDB = require("../middleware/DBconnection.middleware");
var noMorePsExt = require("../middleware/parseMarkdown.middleware");

var showdown = require('showdown');
const converter = new showdown.Converter({
  extensions: [noMorePsExt]
});

const queryDB = util.promisify(connectDB.query).bind(connectDB);

//render page
router.get("/event", async (req, res, next) => {

  try {

    const competitions = await queryDB("SELECT * FROM wca_db.competitions order by `year` desc, `month` desc, `day` desc;")

    res.render('page/event', {
      competitions: competitions,
      converter: converter,
      page: parseInt(req.query.page || 0),
    });

    // console.log(req.query.page );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router
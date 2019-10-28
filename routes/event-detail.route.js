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
router.get("/event-detail/:eventID", async (req, res, next) => {

  try {
    var competitionId = req.params.eventID;

    const competition = await queryDB("SELECT * FROM wca_db.competitions where id = '" + competitionId + "'");
    const eventList = await queryDB("SELECT id, name FROM wca_db.events");

    res.render('page/event-detail', {
      competition: competition[0],
      converter: converter,
      eventList: eventList,
    });

  } catch (error) {
    console.error(error);
  }
});

module.exports = router
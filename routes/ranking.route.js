var router = require("express").Router();
var util = require('util');

var connectDB = require("../middleware/DBconnection.middleware");

const queryDB = util.promisify(connectDB.query).bind(connectDB);

const eventDefault = '333'
const formatDefault = 'Average'

//render page
router.get("/ranking", async (req, res, next) => {
  
  var event = req.query.event || eventDefault;
  var format = req.query.format || formatDefault;

  try {

    const rank = await queryDB("call getResult" + format + "('" + event + "')")
    const events = await queryDB("select * from events")
    const eventName = await queryDB("select name from events where id = '" + event + "'")

    res.render('page/ranking', {
      rank: rank,
      currentEvent: event,
      events: events,
      eventName: eventName,
      format: format,
      page: req.query.page || 0,
    });

    // console.log(req.query.page );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router
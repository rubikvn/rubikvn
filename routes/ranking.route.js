var router = require("express").Router();

var connectDB = require("../middleware/DBconnection.middleware");

//ranking
router.get("/ranking", (req, res, next) => {
  var resultSet
  var event = '333'
  var format = 'Average'
  

  connectDB.query("call getResult" + format + "('" + event + "')", function (err, rows, fields) {
    if (err) throw err

    resultSet = rows
    
    res.render('page/ranking', {
      results: resultSet,
      format: format,
      start: 0,
      end: 100,
    });
  
  })

});

module.exports = router
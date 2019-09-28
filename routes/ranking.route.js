var router = require("express").Router();

var connectDB = require("../middleware/DBconnection.middleware");

connectDB.query("call getResultBest('333')", function (err, rows, fields) {
  if (err) throw err

  console.log('333: ', rows)
})

connectDB.end()

//ranking
router.get("/ranking", (req, res, next) => {
  var results = [

  ]

  res.render('page/ranking');
});

module.exports = router
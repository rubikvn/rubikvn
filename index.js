var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//set view engine =
app.set('view engine', 'ejs');

/* get everything in public */
app.use(express.static(path.join(__dirname, 'public')));


/* get page */
//home
app.get("/", (req, res, next) => {
    res.render('page/home', );
});

var ranking = require("./routes/ranking.route");
app.use("/", ranking);


//event
app.get("/event", (req, res, next) => {
    res.render('page/event', );
});

/* host (3000) */
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
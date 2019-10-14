var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var path = require("path");

var {AuthRoute} = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//set view engine =
app.set('view engine', 'ejs');

/* get everything in public */
app.use(express.static(path.join(__dirname, 'public')));

/* authen */
app.use("/auth", AuthRoute);

/* get page */
//home
var home = require("./routes/home.route");
app.use("/", home);

//ranking
var ranking = require("./routes/ranking.route");
app.use("/", ranking);

//event
var event = require("./routes/event.route");
app.use("/", event);

/* host (3000) */
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
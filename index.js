var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var {AuthRoute} = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/auth", AuthRoute);
app.get("/", (req, res, next) => {
    res.send("Hello rubikvn");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
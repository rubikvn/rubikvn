var express = require("express");
var app = express();
var port = 3000;


app.get("/", (req, res, next) => {
    res.send("Hello rubikvn");
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
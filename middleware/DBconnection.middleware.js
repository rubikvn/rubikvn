var mysql = require('mysql')

var wca_db = mysql.createConnection({
  host: 'localhost',
  user: 'rubikvn',
  password: 'admin',
  database: 'wca_db'
})

wca_db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + wca_db.threadId);
});

module.exports = wca_db
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

wca_db.query('select * from events', function (err, rows, fields) {
  if (err) throw err

  console.log('333: ', rows[1].name)
})


module.exports = wca_db
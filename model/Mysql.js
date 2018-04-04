var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
//
// connection.query('SELECT * FROM user', function (error, results, fields) {
//     console.log(results);
//     console.log(fields+' affected');
//     if (error) throw error;
//     // connected!
// });

module.exports = connection;
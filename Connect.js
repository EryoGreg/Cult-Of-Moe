    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : ''
    });

    connection.connect();

    connection.query('SELECT * FROM user', function(err, rows, fields) {
        if (err) throw err;
        console.log('pwet', rows[0].solution);
    });

    connection.end();
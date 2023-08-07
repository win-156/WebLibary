const sql = require('mssql/msnodesqlv8');

var config = {
    server: "localhost",
    database: "Library",
    user: 'sa',      
    password: "123456aA@$",
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    },
    diver: 'msnodesqlv8'
}


// connection
const conn = new sql.ConnectionPool(config).connect().then((pool) =>{
    return pool
})

module.exports = {

    conn: conn,
    sql: sql
}  
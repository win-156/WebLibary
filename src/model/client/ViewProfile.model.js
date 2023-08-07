const {conn, sql} = require('../../config/db/index')
class ViewProfileModel {
    async GetInfoClient(username, result){
        var pool = await conn;

        var sqlStringGet = 'SELECT * FROM USERS WHERE USERNAME = @USERNAME'
        await pool.request()
        .input('USERNAME', sql.VarChar, username)
        .query(sqlStringGet, (err, data)=>{
            console.log(data)
            if(err){
                result(true, err)
            }
            else{
                result(null, data.recordsets)
            }
        })
    }
}

module.exports = new ViewProfileModel

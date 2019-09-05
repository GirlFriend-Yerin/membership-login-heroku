const dataJson = require('../model/data.json')
const fs = require('../routes/fileSystem')

class DataSource{

    static isDuplicate(id){
        return dataJson.user.some(value => value.id === id)
    }

    static isLoginable(id, pwd){
        console.log(id, pwd)

        return dataJson.user.some(value => value.id === id && value.pwd === pwd)
    }

    static createUser(userSource){
        userSource.removeState = 'none'
        dataJson.user.push(userSource)

        fs(dataJson)
    }

    removeUser(userid){
        userSource.removeState = 'saved'
    }
}

module.exports = DataSource 
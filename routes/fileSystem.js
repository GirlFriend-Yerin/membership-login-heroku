const fs = require('fs')

module.exports = (obj) => {
    
    fs.writeFile('./model/data.json', JSON.stringify(obj), (err) => {
        if (err !== null)
            fs.appendFileSync('./model/Log.txt', err.message)
    })
}
const uuid = require('uuid/v1')

module.exports = {
    timestamp: function(){
        return Date.now()
    },
    uuid: function() {
        return uuid()
    }
}
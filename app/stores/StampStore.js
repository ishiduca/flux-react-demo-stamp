var Disptcher = require('../dispatcher/AppDispatcher')
var events = require('events')
var util   = require('util')

function Store () {
    events.EventEmitter.call(this)
    this.list = []
}
util.inherits(Store, events.EventEmitter)

Store.prototype.add_stamp = function (value) {
    this.list.push(value)
    this.emitChange()
    return this
}

Store.prototype.emitChange = function () {
    this.emit('change')
}

Store.prototype.onChange = function (f) {
    this.on('change', f)
}

Store.prototype.getlist = function () {
    return this.list
}


var store = module.exports = new Store

Disptcher.register(function (payload) {
    var actionType = payload.actionType.toLowerCase()

    if (typeof store[actionType] === 'function') {
        store[actionType](payload.value)
    }
})

var Dispatcher = require('../dispatcher/AppDispatcher')

module.exports = {
    stamp: function () {
        var val = Math.random()
        Dispatcher.dispatch({
            actionType: 'ADD_STAMP'
          , value: val
        })
    }
}

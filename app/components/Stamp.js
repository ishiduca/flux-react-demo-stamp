var React      = require('react')
var Button     = require('./Button')
var List       = require('./List')
var StampStore = require('../stores/StampStore')

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <Button />
                <List list={this.state.list} />
            </div>
        )
    }
  , getInitialState: function () {
        return getlist()
    }
  , componentDidMount: function () {
        StampStore.onChange(this._onChange)
    }
  , _onChange: function () {
        this.setState(getlist())
    }
})

function getlist () {
    return {list: StampStore.getlist()}
}

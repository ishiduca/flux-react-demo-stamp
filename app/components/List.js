var React = require('react')
var stampStore = require('../stores/StampStore')

module.exports = React.createClass({
    render: function () {
        var list = this.props.list
        return (
            <ul>{list.map(function (val) {
                return (
                    <li key={val}>{val}</li>
                )
            })}</ul>
        )
    }
})

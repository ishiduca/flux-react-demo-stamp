var React = require('react')
var AppStamp = require('../actions/StampActions')


module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <button
                    className="stamp-button"
                    onClick={this.handleClick}>
                    stamp
                </button>
            </div>
        )
    }
  , handleClick: function (ev) {
        AppStamp.stamp()
    }
})

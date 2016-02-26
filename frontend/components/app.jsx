var React = require('react');
var NavBar = require('./navBar');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;

var React = require('react');
var History = require('react-router').History;

var EventIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/event/' + this.props.event.id, {});
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="paper-box clickable">
        <h3>{this.props.event.title}</h3>
        <p>{this.props.event.description}</p>
      </div>
    );
  }
});

module.exports = EventIndexItem;

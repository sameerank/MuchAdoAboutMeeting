var React = require('react');
var History = require('react-router').History;

var EventIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/event/' + this.props.event.id, {});
  },

  _descriptionOutput: function () {
    var maxLength = 80;
    if (this.props.event.description.length > maxLength) {
      return this.props.event.description.slice(0,maxLength) + " ...";
    } else {
      return this.props.event.description;
    }
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="paper-box clickable event-hover">
        <h3>{this.props.event.title}</h3>
        <p>{this._descriptionOutput()}</p>
      </div>
    );
  }
});

module.exports = EventIndexItem;

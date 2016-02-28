var React = require('react');
var History = require('react-router').History;

var EventIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/event/' + this.props.event.id, {});
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="col-sm-4">
        <img src={this.props.group.banner_url}
          alt="Event icon is missing"
          className="event_icon" />
        <div className="thumbnail-content">
          <h3>{this.props.event.title}</h3>
          <p>{this.props.event.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = EventIndexItem;

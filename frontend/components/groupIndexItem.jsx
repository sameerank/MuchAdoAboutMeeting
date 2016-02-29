var React = require('react');
var History = require('react-router').History;

var GroupIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/group/' + this.props.group.id, {});
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="col-sm-4">
        <img src={this.props.group.banner_url}
          alt="Group icon is missing"
          className="group-icon clickable" />
        <div className="thumbnail-content">
          <h3>{this.props.group.title}</h3>
          <p>{this.props.group.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = GroupIndexItem;

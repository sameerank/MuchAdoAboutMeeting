var React = require('react');
var History = require('react-router').History;

var UserIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/user/' + this.props.user.id, {});
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="imageContainer">
        <div className="clickable text-center back-on-hover">
          <img src={this.props.user.avatar_url} alt={this.props.user.name} />
          <p>{this.props.user.name}</p>
        </div>
      </div>
    );
  }
});

module.exports = UserIndexItem;

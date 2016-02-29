var React = require('react');
var History = require('react-router').History;

var GroupHeader = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/group/' + this.props.group.id, {});
  },

  render: function () {
    return (
      <header onClick={this.showDetail} className="clickable header-content">
        <img alt={this.props.group.title}
          src={this.props.group.banner_url} />
      </header>
    );
  }
});

module.exports = GroupHeader;

var React = require('react');
var History = require('react-router').History;

var GroupHeader = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/group/' + this.props.group.id, {});
  },

  render: function () {
    return (
      <header className="clickable flex-center"
      onClick={this.showDetail}>
        <img alt={this.props.group.title}
          src={this.props.group.banner_url} />
        <div className="group-header-content flex-center">
          <span className="gray-background">
            {this.props.group.title}
          </span>
        </div>
      </header>
    );
  }
});

module.exports = GroupHeader;

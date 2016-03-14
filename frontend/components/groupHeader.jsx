var React = require('react');
var History = require('react-router').History;

var GroupHeader = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/group/' + this.props.group.id, {});
  },

  render: function () {
    return (
      <header className="clickable group-header-container"
      onClick={this.showDetail}>
        <div className="group-header-frame">
          <div className="group-header-zoomin">
            <img alt={this.props.group.title}
              src={this.props.group.banner_url.replace("upload/", "upload/e_brightness:-10/")} />
          </div>
        </div>
        <div className="group-header-content">
          <span className="text-shadow">
            {this.props.group.title}
          </span>
        </div>
      </header>
    );
  }
});

module.exports = GroupHeader;

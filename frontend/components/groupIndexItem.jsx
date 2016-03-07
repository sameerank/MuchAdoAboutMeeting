var React = require('react');
var History = require('react-router').History;

var GroupIndexItem = React.createClass({
  mixins: [History],

  _showDetail: function () {
    if (window.current_user !== undefined) {
      this.history.pushState(null, '/group/' + this.props.group.id, {});
    }
  },

  _descriptionOutput: function () {
    var maxLength = 42;
    if (this.props.group.description.length > maxLength) {
      return this.props.group.description.slice(0,maxLength) + " ...";
    } else {
      return this.props.group.description;
    }
  },

  render: function () {
    return (
      <div className="col-sm-4 clickable" onClick={this._showDetail}>

        <img src={this.props.group.banner_url.replace("upload/", "upload/c_crop,h_150,w_300/")}
          alt="Group icon is missing"
          className="group-icon"
           />
        <div className="thumbnail-content">
          <h3 className="gray-background">{this.props.group.title}</h3>
          <p className="gray-background">{this._descriptionOutput()}</p>
        </div>

      </div>
    );
  }
});

module.exports = GroupIndexItem;

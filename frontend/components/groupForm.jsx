var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var GroupForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    title: '',
    description: '',
    location: '',
    organizer_id: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createGroup: function (event) {
    event.preventDefault();
    var group = {};

    Object.keys(this.state).forEach(function (key) {
          group[key] = this.state[key];
        }.bind(this));

    ApiUtil.createGroup(group, function (id) {
      this.props.history.pushState(null, "group/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form onSubmit={this.createGroup}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Title"
            valueLink={this.linkState("title")} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" placeholder="Description"
            valueLink={this.linkState("description")} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" className="form-control" placeholder="Location"
            valueLink={this.linkState("location")} />
        </div>
        <div className="form-group">
          <label>Banner URL</label>
          <input type="text" className="form-control" placeholder="Banner URL"
            valueLink={this.linkState("banner_url")} />
        </div>

        <button type="submit" className="btn btn-default">Createth the group!</button>
      </form>
    );
  }
});

module.exports = GroupForm;

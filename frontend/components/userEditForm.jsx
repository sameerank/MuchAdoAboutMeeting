var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user');

var UserEditForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  initialAttrs: function () {
    return {
      id: this.props.location.state.id,
      email: this.props.location.state.email,
      name: this.props.location.state.name,
      location: this.props.location.state.location,
      gender: this.props.location.state.gender,
      bio: this.props.location.state.bio,
      avatar_url: this.props.location.state.avatar_url
    };
  },

  getInitialState: function () {
    return this.initialAttrs();
  },

  _updateUser: function (e) {
    e.preventDefault();
    var user = {};

    Object.keys(this.state).forEach(function (key) {
          user[key] = this.state[key];
        }.bind(this));

    ApiUtil.updateUser(user, function (id) {
      this.props.history.pushState(null, "user/" + id, {});
    }.bind(this));

    this.setState(this.initialAttrs);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-6'>
            <form onSubmit={this._updateUser}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Title"
                  valueLink={this.linkState("email")} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Description"
                  valueLink={this.linkState("name")} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control" placeholder="Location"
                  valueLink={this.linkState("location")} />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input type="text" className="form-control" placeholder="Gender"
                  valueLink={this.linkState("gender")} />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea rows="7" className="form-control" placeholder="Bio"
                  valueLink={this.linkState("bio")} />
              </div>
              <div className="form-group">
                <label>Avatar URL</label>
                <input type="text" className="form-control" placeholder="Avatar URL"
                  valueLink={this.linkState("avatar_url")} />
              </div>

              <button type="submit" className="btn btn-primary">Submiteth the update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserEditForm;

var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user');

var UserEditForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  initialAttrs: function () {
    return {
      id: this.props.current_user.id,
      email: this.props.current_user.email,
      name: this.props.current_user.name,
      location: this.props.current_user.location,
      gender: this.props.current_user.gender,
      bio: this.props.current_user.bio,
      avatar_url: this.props.current_user.avatar_url
    };
  },

  getInitialState: function () {
    return this.initialAttrs();
  },

  _updateUser: function (e) {
    e.preventDefault();
    $('.modal').modal('hide');
    var user = {};

    Object.keys(this.state).forEach(function (key) {
          user[key] = this.state[key];
        }.bind(this));

    ApiUtil.updateUser(user, function (id) {
      this.history.pushState(null, "user/" + id, {});
    }.bind(this));

    this.setState(user);
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

var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var JoinGroupToggle = React.createClass({

  _addUserToGroup: function () {

    var user_group = {
      user_id: window.current_user,
      group_id: this.props.group.id
    };

    ApiUtil.createUserGroup(user_group);
  },

  _removeUserFromGroup: function () {

    var userGroupToBeRemoved = this.props.group.user_groups.find( function (user_group) {
      return user_group.user_id === window.current_user;
    })

    ApiUtil.deleteUserGroup(userGroupToBeRemoved);
  },

  render: function () {

    var joinButton= function () {
      group_member_ids = this.props.group.users.map(function (user) {
        return user.id;
      });

      if (group_member_ids.indexOf(window.current_user) > -1) {
        return (
          <form onClick={this._removeUserFromGroup}>
            <button type="submit" className="btn btn-default btn-lg btn-danger">Leaveth group!</button>
          </form>
        );
      } else {
        return (
          <form onClick={this._addUserToGroup}>
            <button type="submit" className="btn btn-default btn-lg btn-success">Joineth group!</button>
          </form>
        );
      }
    }.bind(this);

    return (
      <div className="text-center">
        {joinButton()}
      </div>
    );

  }

});

module.exports = JoinGroupToggle;

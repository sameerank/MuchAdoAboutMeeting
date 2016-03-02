var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;

var JoinEventToggle = React.createClass({

  _addUserToEvent: function () {

    var user_event = {
      user_id: window.current_user,
      event_id: this.props.event.id
    };

    ApiUtil.createUserEvent(user_event);
  },

  _removeUserFromEvent: function () {

    var userEventToBeRemoved = this.props.event.user_events.find( function (user_event) {
      return user_event.user_id === window.current_user;
    })

    ApiUtil.deleteUserEvent(userEventToBeRemoved);
  },

  render: function () {

    var joinButton= function () {
      event_member_ids = this.props.event.users.map(function (user) {
        return user.id;
      });

      if (event_member_ids.indexOf(window.current_user) > -1) {
        return (
          <form onClick={this._removeUserFromEvent}>
            <button type="submit" className="btn btn-default">Leaveth event!</button>
          </form>
        );
      } else {
        return (
          <form onClick={this._addUserToEvent}>
            <button type="submit" className="btn btn-default">Joineth event!</button>
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

module.exports = JoinEventToggle;

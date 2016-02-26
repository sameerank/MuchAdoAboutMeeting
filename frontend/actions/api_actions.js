var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var EventConstants = require('../constants/event_constants');

var ApiActions = {
  receiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveSingleUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllEvents: function (events) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveSingleEvent: function (event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
      event: event
    })
  }
}

module.exports = ApiActions;

var ApiActions = require('../actions/api_actions');

var handleError = function () {
  window.location = '/#/unauthorizedAccess';
};

ApiUtil = {

  createUserEvent: function (user_event) {
    var options = {
      url: "api/user_events",
      method: "POST",
      data: {user_event: user_event},
      success: function (resp) {
        this.fetchEvent(resp.event_id);
      }.bind(this),
      error: handleError
    };
    $.ajax(options);
  },

  deleteUserEvent: function (user_event) {
    var options = {
      url: "api/user_events/" + user_event.id,
      method: "DELETE",
      success: function (resp) {
        this.fetchEvent(resp.event_id);
      }.bind(this),
      error: handleError
    };
    $.ajax(options);
  },

  createUserGroup: function (user_group) {
    var options = {
      url: "api/user_groups",
      method: "POST",
      data: {user_group: user_group},
      success: function (resp) {
        this.fetchGroup(resp.group_id);
      }.bind(this),
      error: handleError
    };
    $.ajax(options);
  },

  deleteUserGroup: function (user_group) {
    var options = {
      url: "api/user_groups/" + user_group.id,
      method: "DELETE",
      success: function (resp) {
        this.fetchGroup(resp.group_id);
      }.bind(this),
      error: handleError
    };
    $.ajax(options);
  },

  updateUser: function (user, callback) {
    var options = {
      url: "api/users/" + user.id,
      method: "PATCH",
      data: {user: user},
      success: function (resp) {
        ApiActions.receiveSingleUser(resp);
        callback(resp.id);
      },
      error: handleError
    };
    $.ajax(options);
  },

  createGroup: function (group, callback) {
    var options = {
      url: "api/groups",
      method: "POST",
      data: {group: group},
      success: function (resp) {
        ApiActions.receiveSingleGroup(resp);
        callback(resp.id);
      },
      error: handleError
    };
    $.ajax(options);
  },

  createEvent: function (event, callback) {
    var options = {
      url: "api/events",
      method: "POST",
      data: {event: event},
      success: function (resp) {
        ApiActions.receiveSingleEvent(resp);
        callback(resp.id);
      },
      error: handleError
    };
    $.ajax(options);
  },

  fetchUsers: function () {
    var options = {
      url: "api/users",
      type: "GET",
      success: function (resp) {
        ApiActions.receiveAllUsers(resp);
      }
    };
    $.ajax(options);
  },

  fetchUser: function (id) {
    var options = {
      url: "api/users/" + id,
      success: function (resp) {
        ApiActions.receiveSingleUser(resp);
      }
    };
    $.ajax(options);
  },

  fetchEvents: function () {
    var options = {
      url: "api/events",
      type: "GET",
      success: function (resp) {
        ApiActions.receiveAllEvents(resp);
      },
      error: handleError
    };
    $.ajax(options);
  },

  fetchEvent: function (id) {
    var options = {
      url: "api/events/" + id,
      success: function (resp) {
        ApiActions.receiveSingleEvent(resp);
      },
      error: handleError
    };
    $.ajax(options);
  },

  fetchGroups: function () {
    var options = {
      url: "api/groups",
      type: "GET",
      success: function (resp) {
        ApiActions.receiveAllGroups(resp);
      },
      error: handleError
    };
    $.ajax(options);
  },

  fetchGroup: function (id) {
    var options = {
      url: "api/groups/" + id,
      success: function (resp) {
        ApiActions.receiveSingleGroup(resp);
      },
      error: handleError
    };
    $.ajax(options);
  },

  logout: function () {
    $.ajax({
      url: "session",
      method: "DELETE",
      success: function () {
        window.location.href = '/';
      },
      error: handleError
    });
  },

  signIntoDemo: function () {
    var options = {
      url: "session",
      method: "POST",
      data: {user: {email: "ghost@kingdom.dk", password: "booooo"}},
      success: function () {
        window.location.href = '/';
      }.bind(this),
      error: handleError
    };
    $.ajax(options);
  }
}

module.exports = ApiUtil;

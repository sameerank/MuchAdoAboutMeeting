var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchUsers: function () {
    var options = {
      url: "api/users",
      type: "GET",
      success: function (resp) {
        ApiActions.receiveAllUsers(resp);
      },
      error: function (resp) {
        console.log(resp);
      }
    };
    $.ajax(options);
  },

  fetchUser: function (id) {
    var options = {
      url: "api/users/" + id,
      success: function (resp) {
        ApiActions.receiveSingleUser(resp);
      },
      error: function (resp) {
        console.log(resp);
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
      error: function (resp) {
        console.log(resp);
      }
    };
    $.ajax(options);
  },

  fetchEvent: function (id) {
    var options = {
      url: "api/events/" + id,
      success: function (resp) {
        ApiActions.receiveSingleEvent(resp);
      },
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
    });
  }
}

module.exports = ApiUtil;

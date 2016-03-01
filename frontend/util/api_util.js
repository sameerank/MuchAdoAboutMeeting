var ApiActions = require('../actions/api_actions');

ApiUtil = {

  createGroup: function (group, callback) {
    $.ajax({
      url: "api/groups",
      method: "POST",
      data: {group: group},
      success: function (resp) {
        ApiActions.receiveSingleGroup(resp);
        callback(resp.id);
      }
    });
  },

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

  fetchGroups: function () {
    var options = {
      url: "api/groups",
      type: "GET",
      success: function (resp) {
        ApiActions.receiveAllGroups(resp);
      },
      error: function (resp) {
        console.log(resp);
      }
    };
    $.ajax(options);
  },

  fetchGroup: function (id) {
    var options = {
      url: "api/groups/" + id,
      success: function (resp) {
        ApiActions.receiveSingleGroup(resp);
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

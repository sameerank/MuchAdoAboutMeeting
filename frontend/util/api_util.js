var ApiActions = require('../actions/api_actions');

ApiUtil = {

  createUserEvent: function (user_event) {
    var options = {
      url: "api/user_events",
      method: "POST",
      data: {user_event: user_event},
      success: function (resp) {
        this.fetchEvent(resp.event_id);
      }.bind(this),
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
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
      error: function (resp) {
        console.log(resp);
      }
    };
    $.ajax(options);
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

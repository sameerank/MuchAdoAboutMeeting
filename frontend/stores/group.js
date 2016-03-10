var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _groups = {};
var GroupStore = new Store(AppDispatcher);

GroupStore.all = function () {
  var groups = [];
  for (var id in _groups) {
    groups.push(_groups[id]);
  }
  return groups;
};

GroupStore.find = function (id) {
  return _groups[id];
};

GroupStore.findBySearch = function (searchQuery) {
  if (searchQuery) {
    return this.all().filter(function (group) {
      var stringToSearch = (group.title + group.description + group.location).toLowerCase();
      return (stringToSearch.indexOf(searchQuery.toLowerCase()) > -1);
    }.bind(this));
  } else {
    return [];
  }
};

var resetGroups = function (groups) {
  _groups = {};
  groups.forEach(function (group) {
  _groups[group.id] = group;
  });
};

var resetGroup = function (group) {
  _groups[group.id] = group;
};

GroupStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case GroupConstants.GROUPS_RECEIVED:
      resetGroups(payload.groups);
      GroupStore.__emitChange();
      break;
    case GroupConstants.GROUP_RECEIVED:
      resetGroup(payload.group);
      GroupStore.__emitChange();
      break;
  }
}

module.exports = GroupStore;

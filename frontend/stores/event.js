var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _events = {};
var EventStore = new Store(AppDispatcher);

EventStore.all = function () {
  var events = [];
  for (var id in _events) {
    events.push(_events[id]);
  }
  return events;
};

EventStore.find = function (id) {
  return _events[id];
};

var resetEvents = function (events) {
  _events = {};
  events.forEach(function (event) {
  _events[event.id] = event;
  });
};

var resetEvent = function (event) {
  _events[event.id] = event;
};

EventStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      EventStore.__emitChange();
      break;
    case EventConstants.EVENT_RECEIVED:
      resetEvent(payload.event);
      EventStore.__emitChange();
      break;
  }
}

module.exports = EventStore;

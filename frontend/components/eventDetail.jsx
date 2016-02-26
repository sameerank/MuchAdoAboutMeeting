var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/api_util');
var UsersIndex = require('./usersIndex');
var UserIndexItem = require('./userIndexItem')


var EventDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { event: EventStore.find(parseInt(this.props.params.eventId)) };
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchEvent(parseInt(newProps.params.eventId));
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (this.state.event === undefined) { return <div></div>; }
    if (this.state.event.users === undefined) { return <div></div>; }

    return (
      <div>
        <div className="event-detail">
          <div className="detail">
            {['title', 'description', 'start_time', 'end_time', 'location'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
            }.bind(this))}
          </div>

          <h2>Users: </h2>
          {this.state.event.users.map(function (user) {
            return (<UserIndexItem key={user.id} user={user} />);
          })}
        </div>

        {this.props.children}

      </div>
    );
  }
});

module.exports = EventDetail;

var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/api_util');
var UserIndexItem = require('./userIndexItem');
var GroupHeader = require('./groupHeader');

var JoinEventToggle = require('./joinEventToggle');

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
      <div className="text-center">
        <GroupHeader group={this.state.event.group} />

        <JoinEventToggle event={this.state.event} />

        <div className="paper-box">
          <div>
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#event-details" aria-controls="event-details" role="tab" data-toggle="tab">Event Details</a></li>
              <li role="presentation"><a href="#users_attending_event" aria-controls="users_attending_event" role="tab" data-toggle="tab">Users</a></li>
            </ul>
          </div>

          <div className="tab-content">

            <div role="tabpanel" className="tab-pane active fade in" id="event-details">
              {['title', 'description', 'location', 'start_time', 'end_time', 'created_at'].map(function (attr) {
                return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
                }.bind(this))}
            </div>

            <div role="tabpanel" className="tab-pane fade" id="users_attending_event">
              {this.state.event.users.map(function (user) {
                return (<UserIndexItem key={user.id} user={user} />);
              })}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventDetail;

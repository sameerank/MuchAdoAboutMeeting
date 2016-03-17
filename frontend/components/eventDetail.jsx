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

  _showUsers: function () {
    if (this.state.event.users.length === 0) {
      return (<p>This event hath no users.</p>);
    } else {
      return (<div className="row">
        {this.state.event.users.map(function (user) {
          return (<div key={user.id} className="col-sm-4 imageContainer">
          <UserIndexItem user={user} />
        </div>);
        })}
      </div>);
    }
  },

  render: function () {
    if (this.state.event === undefined) { return <div></div>; }
    if (this.state.event.users === undefined) { return <div></div>; }

    return (
      <div>
        <GroupHeader group={this.state.event.group} />

        <JoinEventToggle event={this.state.event} />
        <div className="flex-center">
          <div className="paper-box info-box">
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#event-details" aria-controls="event-details" role="tab" data-toggle="tab">Event Details</a></li>
                <li role="presentation"><a href="#users_attending_event" aria-controls="users_attending_event" role="tab" data-toggle="tab">Users</a></li>
              </ul>
            </div>

            <div className="tab-content">

              <div role="tabpanel" className="tab-pane active fade in" id="event-details">
                <div className="detail paper-box flex-center">
                  <div className="row">
                    <div className="col-md-6 well text-center">
                      <br /><br />
                      <h2>{this.state.event.title}</h2>
                      <br /><br />
                      <h4>{this.state.event.description}</h4>
                      <br />
                      <p>located @ {this.state.event.location}</p>
                      <br />
                      <p>from {this.state.event.start_time}</p>
                      <p>to {this.state.event.end_time}</p>
                    </div>
                    <div className="col-md-6 text-center">
                      <h3>This event is hosted by</h3>
                      <UserIndexItem
                        user={this.state.event.host}
                        group={this.state.event.group} />
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="users_attending_event">
                {this._showUsers()}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventDetail;

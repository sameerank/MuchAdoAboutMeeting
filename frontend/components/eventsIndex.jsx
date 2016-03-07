var React = require('react');
var EventStore = require('../stores/event');
var ApiUtil = require('../util/api_util');
var EventIndexItem = require('./eventIndexItem');

var EventIndex = React.createClass({
  getInitialState: function () {
    return {
      events: EventStore.all()
    };
  },

  componentDidMount: function () {
    this.eventListener = EventStore.addListener(this._onChange);
    ApiUtil.fetchEvents();
  },

  componentWillUnmount: function () {
    this.eventListener.remove()
  },

  _onChange: function () {
    this.setState({
      events: EventStore.all()
    });
  },

  render: function () {
    return (
      <section>
        <div className="container items-index">
          <div className="row">
            <div>
              {
                this.state.events.map(function (event) {
                  return <EventIndexItem key={event.id} event={event}
                    group={event.group} />;
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = EventIndex;

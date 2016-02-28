var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var eventsIndex = require('./eventsIndex');
var EventIndexItem = require('./eventIndexItem');

var UserDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { user: UserStore.find(parseInt(this.props.params.userId)) };
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(parseInt(newProps.params.userId));
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(parseInt(this.props.params.userId));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  render: function () {
    if (this.state.user === undefined) { return <div></div>; }

    return (
      <div>
        <div className="user-detail">
          <div className="detail">
          <img src={this.state.user.avatar_url} />
            {['name', 'location', 'gender', 'bio'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.user[attr]}</p>;
            }.bind(this))}
          </div>

          <div>
            <h2>Events: </h2>
            {this.state.user.events.map(function (event) {
              return (<EventIndexItem key={event.id} event={event}
                group={event.group} />);
            })}
          </div>

        </div>
      </div>
    );
  }

});

module.exports = UserDetail;

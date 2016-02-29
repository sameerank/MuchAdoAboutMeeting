var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var eventsIndex = require('./eventsIndex');
var EventIndexItem = require('./eventIndexItem');
var GroupIndexItem = require('./groupIndexItem');

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
        <div className="paper-box">
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
            <li role="presentation"><a href="#events-attending" aria-controls="events-attending" role="tab" data-toggle="tab">Events</a></li>
            <li role="presentation"><a href="#groups-membership" aria-controls="groups-membership" role="tab" data-toggle="tab">Groups</a></li>
          </ul>

          <div className="tab-content">

            <div role="tabpanel" className="tab-pane active" id="profile">
              <div className="detail paper-box">
                <img src={this.state.user.avatar_url} />
                {['name', 'location', 'gender', 'bio'].map(function (attr) {
                  return <p key={attr}>{attr}: {this.state.user[attr]}</p>;
                  }.bind(this))}
                </div>
            </div>

            <div role="tabpanel" className="tab-pane" id="events-attending">
              {this.state.user.events.map(function (event) {
                return (<EventIndexItem key={event.id} event={event}
                  group={event.group} />);
                })}
            </div>

            <div role="tabpanel" className="tab-pane" id="groups-membership">
              {this.state.user.groups.map(function (group) {
                return (<GroupIndexItem key={group.id} group={group} />);
                })}
            </div>
            
          </div>
        </div>

      </div>
    );
  }

});

module.exports = UserDetail;

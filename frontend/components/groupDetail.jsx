var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/api_util');
var UserIndexItem = require('./userIndexItem');
var EventIndexItem = require('./eventIndexItem');
var GroupHeader = require('./groupHeader');

var GroupDetail = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { group: GroupStore.find(parseInt(this.props.params.groupId)) };
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchGroup(parseInt(newProps.params.groupId));
    },

    componentDidMount: function () {
      this.groupListener = GroupStore.addListener(this._onChange);
      ApiUtil.fetchGroup(parseInt(this.props.params.groupId));
    },

    componentWillUnmount: function () {
      this.groupListener.remove();
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    render: function () {
      if (this.state.group === undefined) { return <div></div>; }
      if (this.state.group.users === undefined) { return <div></div>; }
      if (this.state.group.events === undefined) { return <div></div>; }

      return (
        <div>
          <div className="group-detail">
            <GroupHeader group={this.state.group} />
            <div className="detail">
              {['title', 'description', 'location'].map(function (attr) {
                return <p key={attr}>{attr}: {this.state.group[attr]}</p>
              }.bind(this))}
            </div>

            <div>
              <h2>Users: </h2>
              {this.state.group.users.map(function (user) {
                return (<UserIndexItem key={user.id} user={user}
                  group={this.state.group} />);
              }.bind(this))}
            </div> <br />

            <div>
              <h2>Events: </h2>
              {this.state.group.events.map(function (event) {
                return (<EventIndexItem key={event.id} event={event}
                  group={this.state.group} />);
              }.bind(this))}
            </div>
          </div>
        </div>
      );

    }
});

module.exports = GroupDetail;

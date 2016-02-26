var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');

var UserIndex = React.createClass({
  getInitialState: function () {
    return {
      users: UserStore.all()
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUsers();
  },

  componentWillUnmount: function () {
    this.userListener.remove()
  },

  _onChange: function () {
    this.setState({
      users: UserStore.all()
    });
  },

  render: function () {
    return (
      <ul>
        {
          this.state.users.map(function (user) {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul>
    );
  }
});

module.exports = UserIndex;

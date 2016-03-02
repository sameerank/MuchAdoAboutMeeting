var React = require('react');
var History = require('react-router').History;
var UserStore = require('../stores/user');

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { current_user: UserStore.find(parseInt(window.current_user)) };
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(parseInt(window.current_user));
  },

  componentDidMount: function () {
    this.eventListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(parseInt(window.current_user));
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _logout: function () {
    ApiUtil.logout();
  },

  _toGroupForm: function () {
    this.history.pushState(null, 'groupForm', {});
  },

  _toProfile: function (event) {
    event.preventDefault();
    this.history.pushState(null, 'user/' + this.state.current_user.id, {});
  },

  _toUserEditForm: function (event) {
    event.preventDefault();
    this.history.pushState(this.state.current_user, 'userEditForm', {});
  },

  render: function () {
    var signUpOrProfileAccordingToLogInStatus = function () {
      if (window.current_user === undefined) {
        return (
          <li>
            <form action="./users/new">
              <button type="submit" className="btn btn-danger navbar-btn">Signeth Up</button>
            </form>
          </li>
        );
      } else {
        if (this.state.current_user === undefined) {
          return <li></li>;
        } else {
          return (
            <li class="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.current_user.email} <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this._toProfile}>View Thyne Profile</a></li>
                <li><a href="#" onClick={this._toUserEditForm}>Edit Thyne Profile</a></li>
                <li><a href="#" onClick={this._logout}>Logeth Out</a></li>
              </ul>
            </li>
          );
        }
      }
    }.bind(this);

    var logInButtonAccordingToLogInStatus = function () {
      if (window.current_user === undefined) {
        return (
          <li>
            <a href="./session/new">Logeth In</a>
          </li>
        );
      } else {
        return (
          <li>
          </li>
        );
      }
    }.bind(this);

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img alt="MuchAdoAboutMeeting" src="http://img1.meetupstatic.com/img/94156887029318281691566697/logo.svg" />
          </a>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a onClick={this._toGroupForm} className="clickable"><b>Starteth</b> a group</a>
              </li>
              <li>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Findeth a group"></input>
                  </div>
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </form>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {logInButtonAccordingToLogInStatus()}
              {signUpOrProfileAccordingToLogInStatus()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;

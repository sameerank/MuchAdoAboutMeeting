var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/user');
var GroupForm = require('./groupForm');
var UserEditForm = require('./userEditForm');
var GroupsSearch = require('./groupsSearch');

var NavBar = React.createClass({

  mixins: [LinkedStateMixin, History],

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { current_user: UserStore.find(parseInt(window.current_user)) };
  },

  componentWillReceiveProps: function (newProps) {
    if (window.current_user !== undefined) {
      ApiUtil.fetchUser(parseInt(window.current_user));
    }
  },

  componentDidMount: function () {
    this.eventListener = UserStore.addListener(this._onChange);
    if (window.current_user !== undefined) {
      ApiUtil.fetchUser(parseInt(window.current_user));
    }
  },

  componentWillUnmount: function () {
    this.eventListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _logout: function (e) {
    e.preventDefault();
    ApiUtil.logout();
  },

  _toProfile: function (e) {
    e.preventDefault();
    this.history.pushState(null, 'user/' + this.state.current_user.id, {});
  },

  _toHome: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/', {});
  },

  _toUserEditForm: function () {
    return <UserEditForm current_user={this.state.current_user} />
  },

  _toGroupSearchResults: function (e) {
    e.preventDefault();
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
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.state.current_user.email} <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this._toProfile}>View Thyne Profile</a></li>

                <li>
                  <a className="clickable" data-toggle="modal" data-target="#userEditFormModal">
                    Edit Thyne Profile
                  </a>
                </li>

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

    var modalDivsIfSignedIn = function () {
      if (this.state.current_user !== undefined) {
        return (
          <div>
            <div className="modal fade" id="userEditFormModal" tabIndex="-1" role="dialog" aria-labelledby="userEditFormModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">Form for editing thyne information:</h4>
                  </div>
                  <div className="modal-body">
                    {this._toUserEditForm()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }.bind(this);

    var startAGroupLinkAccordingToLogInStatus = function () {
      if (window.current_user === undefined) {
        return (
          <li>
          </li>
        );
      } else {
        return (
          <li>
            <a className="clickable" data-toggle="modal" data-target="#createGroupModal">
              <b>Starteth</b> a group
            </a>
          </li>
        );
      }
    }.bind(this);

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#" onClick={this._toHome}>
              <img alt="MuchAdoAboutMeeting" src="http://res.cloudinary.com/deh4rnozs/image/upload/v1457224670/logo_rkqyls.gif" />
            </a>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">

                {startAGroupLinkAccordingToLogInStatus()}

                <li>
                  <form className="navbar-form navbar-left" role="search" onSubmit={this._toGroupSearchResults} >
                    <div className="form-group">
                      <input type="text"
                        className="form-control"
                        placeholder="Findeth a group"
                        valueLink={this.linkState("searchQuery")}>
                      </input>
                    </div>
                    <button type="submit"
                      className="btn btn-default"
                      data-toggle="modal"
                      data-target="#searchResultsModal">
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

        <div className="modal fade" id="createGroupModal" tabIndex="-1" role="dialog" aria-labelledby="createGroupModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">A form for creating a group:</h4>
              </div>
              <div className="modal-body">
                <GroupForm />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="searchResultsModal" tabIndex="-1" role="dialog" aria-labelledby="searchResultsModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Search results:</h4>
              </div>
              <div className="modal-body">
                <GroupsSearch searchQuery={this.state.searchQuery} />
              </div>
            </div>
          </div>
        </div>

        {modalDivsIfSignedIn()}

      </div>
    );
  }
});

module.exports = NavBar;

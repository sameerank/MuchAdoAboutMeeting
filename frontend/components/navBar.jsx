var React = require('react');

var NavBar = React.createClass({
  _logout: function () {
    ApiUtil.logout();
  },

  render: function () {

    var signUpButtonifNotLoggedIn = function () {
      if (window.current_user === undefined) {
        return (
          <li>
            <form action="./users/new">
              <button type="submit" className="btn btn-danger navbar-btn">Signeth Up</button>
            </form>
          </li>
        );
      }
    }

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
            <a href="#" onClick={this._logout} >Logeth Out</a>
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
                <a href="#"><b>Findeth</b> a meeting group</a>
              </li>
              <li>
                <a href="#"><b>Starteth</b> a meeting group</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"></input>
                  </div>
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </form>
              </li>
              {logInButtonAccordingToLogInStatus()}
              {signUpButtonifNotLoggedIn()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;

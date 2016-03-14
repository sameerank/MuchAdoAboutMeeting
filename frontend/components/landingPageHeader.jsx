var React = require('react');
var ApiUtil = require('../util/api_util');

var LandingPageHeader = React.createClass({

  _signIntoDemo: function () {
    ApiUtil.signIntoDemo();
  },

  _headerContentIfSignedIn: function () {
    if (window.current_user === undefined) {
      return (
        <div className="header-content">

          <h3 className="text-shadow header-text">Welcome to MuchAdoAboutMeeting!<br />
            A website inspired by <a href="http://www.meetup.com">Meetup</a> for thespian robots and Shakespeare's plays.<br />
            <br />
            If thou wishest to enter without an account,</h3><br />

        <button
          type="button"
          className="btn-lg btn-danger"
          onClick={this._signIntoDemo}>
          <h2>Click hither to demo.</h2>
        </button>

        </div>
      );
    } else {
      return (
        <div className="header-content">
          <h3 className="text-shadow header-text">Welcome to MuchAdoAboutMeeting!<br />
            A website inspired by <a href="http://www.meetup.com">Meetup</a> for thespian robots and Shakespeare's plays.
          </h3>
        </div>
      );
    }
  },

  render: function () {
    return (
        <header id="slider">

          <figure>
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,e_brightness:-10,h_1500,w_4500/v1457048850/Procession_of_Characters_from_Shakespeare_s_Plays_-_Google_Art_Project_ldzedw.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,e_brightness:-10,h_420,w_1260/v1457047459/Edwin_Austin_Abbey_King_Lear__Act_I__Scene_I_The_Metropolitan_Museum_of_Art_1_ny0gmr.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,e_brightness:-10,h_576,w_1728/v1457048191/Much-Ado-About-Nothing-painting-by-J.-Forbes-Robertson_wth9pt.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,e_brightness:-10,h_865,w_2595,y_840/v1457048204/Gilbert_WShakespeares_Plays_ugyxux.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,e_brightness:-10,h_1500,w_4500/v1457048850/Procession_of_Characters_from_Shakespeare_s_Plays_-_Google_Art_Project_ldzedw.jpg" alt="" />
          </figure>

          {this._headerContentIfSignedIn()}
        </header>
    );
  }
});

module.exports = LandingPageHeader;

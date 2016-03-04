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
          <h3>Nor stony tower, nor walls of beaten brass,<br />
          Nor airless dungeon, nor strong links of iron,<br />
          Can be retentive to the strength of spirit; <br /><br />

        If thou wishest to enter without an account,</h3><br />

          <button
            type="button"
            className="btn-lg btn-warning"
            onClick={this._signIntoDemo}>
            <h2>Click hither to demo.</h2>
          </button>

        </div>
      );
    } else {
      return (
        <div className="header-content">
          <h3>
            By my sweet soul, I mean setting thee at liberty,<br />
            enfreedoming thy person; thou wert immured,<br />
            restrained, captivated, bound.<br />
          </h3>
        </div>
      );
    }
  },

  render: function () {
    return (
        <header id="slider">

          <figure>
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,h_1500,w_4500/v1457048850/Procession_of_Characters_from_Shakespeare_s_Plays_-_Google_Art_Project_ldzedw.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,h_420,w_1260/v1457047459/Edwin_Austin_Abbey_King_Lear__Act_I__Scene_I_The_Metropolitan_Museum_of_Art_1_ny0gmr.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,h_576,w_1728/v1457048191/Much-Ado-About-Nothing-painting-by-J.-Forbes-Robertson_wth9pt.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,h_865,w_2595,y_840/v1457048204/Gilbert_WShakespeares_Plays_ugyxux.jpg" alt="" />
            <img src="http://res.cloudinary.com/deh4rnozs/image/upload/c_crop,h_1500,w_4500/v1457048850/Procession_of_Characters_from_Shakespeare_s_Plays_-_Google_Art_Project_ldzedw.jpg" alt="" />
          </figure>

          {this._headerContentIfSignedIn()}
        </header>
    );
  }
});

module.exports = LandingPageHeader;

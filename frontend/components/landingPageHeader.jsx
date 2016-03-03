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

          If thou wishest to demo without an account</h3><br />

          <button
            type="button"
            className="btn-lg btn-primary"
            onClick={this._signIntoDemo}>
            Clicketh to enter
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
      <header>
        <img alt="MuchAdoAboutMeeting"
          src="http://res.cloudinary.com/deh4rnozs/image/upload/v1456344888/Edwin_Austin_Abbey_King_Lear__Act_I__Scene_I_The_Metropolitan_Museum_of_Art_l4f8ay.jpg" />

        {this._headerContentIfSignedIn()}

      </header>
    );
  }
});

module.exports = LandingPageHeader;

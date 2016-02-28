var React = require('react');

var EventsHeader = React.createClass({
  render: function () {
    return (
      <header>
        <img alt="MuchAdoAboutMeeting"
          src="http://res.cloudinary.com/deh4rnozs/image/upload/v1456344888/Edwin_Austin_Abbey_King_Lear__Act_I__Scene_I_The_Metropolitan_Museum_of_Art_l4f8ay.jpg" />
        <div className="header-content">
          <h3>Nor stony tower, nor walls of beaten brass,<br />
              Nor airless dungeon, nor strong links of iron,<br />
              Can be retentive to the strength of spirit; <br /><br />

          If thou wishest to demo without an account</h3><br />
          <button type="submit" className="btn-lg btn-default navbar-btn">Clicketh to enter</button>

        </div>
      </header>
    );
  }
});

module.exports = EventsHeader;

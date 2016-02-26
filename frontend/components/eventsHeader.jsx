var React = require('react');

var EventsHeader = React.createClass({
  render: function () {
    return (
      <header>
        <img alt="MuchAdoAboutMeeting"
          src="http://res.cloudinary.com/deh4rnozs/image/upload/v1456344888/Edwin_Austin_Abbey_King_Lear__Act_I__Scene_I_The_Metropolitan_Museum_of_Art_l4f8ay.jpg" />
        <div className="header-content">
          <h3>blah blah blah<br />
          blah blah blah. </h3><br />
        <button type="submit" className="btn-lg btn-default navbar-btn">Take me to the demo</button>
        </div>
      </header>
    );
  }
});

module.exports = EventsHeader;

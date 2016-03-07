var React = require('react');
var LandingPageHeader = require('./landingPageHeader');
var EventsIndex = require('./eventsIndex');
var GroupsIndex = require('./groupsIndex');

var LandingPage = React.createClass({

  render: function () {

    var landingPageContents = function () {
      if (window.current_user === undefined) {
        return (<div><br />
          <div className="text-center groups-title">Groups</div>
          < GroupsIndex />
        </div>);
    } else {
      return (<div>

          <br />

          <ul className="nav nav-pills flex-center" role="tablist">
            <li role="presentation" className="active"><a href="#events" aria-controls="events" role="tab" data-toggle="tab"><h2>Events</h2></a></li>
            <li role="presentation"><a href="#groups" aria-controls="groups" role="tab" data-toggle="tab"><h2>Groups</h2></a></li>
          </ul>

          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="events">< EventsIndex /></div>
            <div role="tabpanel" className="tab-pane" id="groups">< GroupsIndex /></div>
          </div>

        </div>);
      }
    };

    return (
      <section>
        <LandingPageHeader />
        {landingPageContents()}
        <footer>
          <div className="text-center footer">
            <a href="https://github.com/sameerank/MuchAdoAboutMeeting"><h3>Thou canst view all the source code here.</h3></a>
          </div>
        </footer>
      </section>
    );
  }
});

module.exports = LandingPage;

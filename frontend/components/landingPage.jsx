var React = require('react');
var LandingPageHeader = require('./landingPageHeader');
var EventsIndex = require('./eventsIndex');
var GroupsIndex = require('./groupsIndex');

var LandingPage = React.createClass({

  render: function () {

    var landingPageContents = function () {
      if (window.current_user === undefined) {
        return < GroupsIndex />;
    } else {
      return (<div>

          <br />

          <ul className="nav nav-pills center-pills" role="tablist">
            <li role="presentation" className="active"><a href="#events" aria-controls="events" role="tab" data-toggle="tab">Events</a></li>
            <li role="presentation"><a href="#groups" aria-controls="groups" role="tab" data-toggle="tab">Groups</a></li>
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
      </section>
    );
  }
});

module.exports = LandingPage;

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
      return < EventsIndex />;
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

var React = require('react');

var NoMatch = React.createClass({

  render: function () {
    return (
      <div className="text-center container">
        <h3>
          Hmm, art thou lost? Click <a href="/">here</a> to return to the home page.
        </h3>
      </div>
    );
  }

});

module.exports = NoMatch;

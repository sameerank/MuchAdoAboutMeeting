var React = require('react');

var UnauthorizedAccess = React.createClass({

  render: function () {
    return (
      <div className="text-center container">
        <h3>
          Thou canst access this page without the requisite qualifications.
          Click <a href="/">here</a> to return to the home page.
        </h3>
      </div>
    );
  }

});

module.exports = UnauthorizedAccess;

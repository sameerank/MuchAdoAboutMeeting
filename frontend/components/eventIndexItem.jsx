var React = require('react');
var History = require('react-router').History;

var EventIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/event/' + this.props.event.id, {});
  },

  render: function () {
    return (
      <div onClick={this.showDetail} className="col-sm-4">
        <div>
          <img src="http://res.cloudinary.com/deh4rnozs/image/upload/w_300,h_150,c_fill,r_10/sample.png" alt="Event icon is missing" />
          <div className="thumbnail-content">
            <h3>{this.props.event.title}</h3>
            <p>{this.props.event.description}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventIndexItem;

var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var EventForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  blankAttrs: function () {
    return {
      title: '',
      description: '',
      start_time: '',
      end_time: '',
      location: '',
      host_id: '',
      group_id: this.props
    };
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createEvent: function (event) {
    event.preventDefault();
    var event = {};

    Object.keys(this.state).forEach(function (key) {
          event[key] = this.state[key];
        }.bind(this));

    ApiUtil.createEvent(event, function (id) {
      this.props.history.pushState(null, "event/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-6'>
            <form onSubmit={this.createEvent}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" placeholder="Title"
                  valueLink={this.linkState("title")} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows="7" className="form-control" placeholder="Description"
                  valueLink={this.linkState("description")} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control" placeholder="Location"
                  valueLink={this.linkState("location")} />
              </div>
              <div className="form-group">
                <label>Start time</label>
                <textarea rows="7" className="form-control" placeholder="Start time"
                  valueLink={this.linkState("start_time")} />
              </div>
              <div className="form-group">
                <label>End time</label>
                <input type="text" className="form-control" placeholder="End time"
                  valueLink={this.linkState("end_time")} />
              </div>

              <button type="submit" className="btn btn-default">Createth the event!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventForm;

var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DateTimeField = require('react-bootstrap-datetimepicker');

var moment = require('moment');

var EventForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  blankAttrs: function () {
    return {
      title: '',
      description: '',
      start_time: '',
      end_time: '',
      location: '',
      host_id: window.current_user,
      group_id: this.props.group.id
    };
  },

  getInitialState: function () {
    return this.blankAttrs();
  },

  _createEvent: function (e) {
    e.preventDefault();
    $('.modal').modal('hide');
    var event = {};

    Object.keys(this.state).forEach(function (key) {
          event[key] = this.state[key];
        }.bind(this));

    ApiUtil.createEvent(event, function (id) {
      this.history.pushState(null, "event/" + id, {});
    }.bind(this));

    this.setState(this.blankAttrs);
  },

  _handleDateChangeStartTime: function (dateTime) {
    this.setState({ start_time: moment(parseInt(dateTime)).format('MM-DD-YYYY HH:mm')});
  },

  _handleDateChangeEndTime: function (dateTime) {
    this.setState({ end_time: moment(parseInt(dateTime)).format('MM-DD-YYYY HH:mm')});
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-6'>
            <form onSubmit={this._createEvent}>
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
                <DateTimeField
                  defaultText="Start time"
                  onChange={this._handleDateChangeStartTime} />
              </div>
              <div className="form-group">
                <label>End time</label>
                <DateTimeField
                  defaultText="End time"
                  onChange={this._handleDateChangeEndTime} />
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

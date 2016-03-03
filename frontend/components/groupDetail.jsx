var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/api_util');
var UserIndexItem = require('./userIndexItem');
var EventIndexItem = require('./eventIndexItem');
var EventForm = require('./eventForm');
var GroupHeader = require('./groupHeader');
var History = require('react-router').History;


var JoinGroupToggle = require('./joinGroupToggle');

var GroupDetail = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { group: GroupStore.find(parseInt(this.props.params.groupId)) };
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchGroup(parseInt(newProps.params.groupId));
    },

    componentDidMount: function () {
      this.groupListener = GroupStore.addListener(this._onChange);
      ApiUtil.fetchGroup(parseInt(this.props.params.groupId));
    },

    componentWillUnmount: function () {
      this.groupListener.remove();
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    render: function () {
      if (this.state.group === undefined) { return <div></div>; }
      if (this.state.group.users === undefined) { return <div></div>; }
      if (this.state.group.events === undefined) { return <div></div>; }

      return (
        <div className="text-center">
          <GroupHeader group={this.state.group} />
          <br />

          <JoinGroupToggle group={this.state.group} />

          <form>
            <a type="submit"
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#createEventFormModal">
                Createth an event new!
            </a>
          </form>

          <div className="modal fade" id="createEventFormModal" tabIndex="-1"
            role="dialog" aria-labelledby="createEventFormModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <EventForm group={this.state.group}/>
                </div>
              </div>
            </div>
          </div>

          <div className="paper-box">
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#group-details" aria-controls="group-details" role="tab" data-toggle="tab">Group Details</a></li>
                <li role="presentation"><a href="#events-in-group" aria-controls="events-in-group" role="tab" data-toggle="tab">Events</a></li>
                <li role="presentation"><a href="#group-members" aria-controls="group-members" role="tab" data-toggle="tab">Members</a></li>
              </ul>
            </div>

            <div className="tab-content">

              <div role="tabpanel" className="tab-pane active fade in" id="group-details">
                <div className="detail paper-box">
                  {['title', 'description', 'location'].map(function (attr) {
                    return <p key={attr}>{attr}: {this.state.group[attr]}</p>
                  }.bind(this))}
                </div>
              </div>

              <div role="tabpanel" className="tab-pane fade" id="events-in-group">
                {this.state.group.events.map(function (event) {
                  return (<EventIndexItem key={event.id} event={event}
                    group={this.state.group} />);
                  }.bind(this))}
              </div>

              <div role="tabpanel" className="tab-pane fade" id="group-members">
                {this.state.group.users.map(function (user) {
                  return (<UserIndexItem key={user.id} user={user}
                    group={this.state.group} />);
                  }.bind(this))}
              </div>

            </div>
          </div>
        </div>
      );

    }
});

module.exports = GroupDetail;

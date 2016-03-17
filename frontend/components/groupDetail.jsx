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

    _showEvents: function () {
      if (this.state.group.events.length === 0) {
        return (<p>This group hath no events.</p>);
      } else {
        return (<div className="row">
          {this.state.group.events.map(function (event) {
            return (<EventIndexItem key={event.id} event={event}
              group={this.state.group} />);
            }.bind(this))}
        </div>);
      }
    },

    _showUsers: function () {
      if (this.state.group.users.length === 0) {
        return (<p>This group hath no users.</p>);
      } else {
        return (<div className="row">
          {this.state.group.users.map(function (user) {
            return (<div key={user.id} className="col-sm-4"><UserIndexItem user={user}
              group={this.state.group} /></div>);
            }.bind(this))}
        </div>);
      }
    },

    render: function () {
      if (this.state.group === undefined) { return <div></div>; }
      if (this.state.group.users === undefined) { return <div></div>; }
      if (this.state.group.events === undefined) { return <div></div>; }
      return (
        <div>
          <GroupHeader group={this.state.group} />
          <br />

          <span className="flex-center">
            <JoinGroupToggle group={this.state.group} />&nbsp;&nbsp;&nbsp;
            <form>
              <a type="submit"
                className="btn btn-primary btn-lg"
                data-toggle="modal"
                data-target="#createEventFormModal">
                Createth a new event!
              </a>
            </form>
          </span>

          <div className="modal fade" id="createEventFormModal" tabIndex="-1"
            role="dialog" aria-labelledby="createEventFormModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">A form for creating an event:</h4>
                </div>
                <div className="modal-body">
                  <EventForm group={this.state.group}/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-center">
            <div className="paper-box info-box">
              <div>
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a href="#group-details" aria-controls="group-details" role="tab" data-toggle="tab">Group Details</a></li>
                  <li role="presentation"><a href="#events-in-group" aria-controls="events-in-group" role="tab" data-toggle="tab">Events</a></li>
                  <li role="presentation"><a href="#group-members" aria-controls="group-members" role="tab" data-toggle="tab">Members</a></li>
                </ul>
              </div>

              <div className="tab-content">

                <div role="tabpanel" className="tab-pane active fade in" id="group-details">
                  <div className="detail paper-box flex-center">
                    <div className="row">
                      <div className="col-md-6 well">
                        <br /><br />
                        <h2 className="text-center">{this.state.group.title}</h2>
                        <br /><br />
                        <p className="text-center">{this.state.group.description}</p>
                        <br />
                        <p className="text-center">located @ {this.state.group.location}</p>
                      </div>
                      <div className="col-md-6">
                        <h3 className="text-center">This group hath been organized by</h3>
                        <UserIndexItem
                          user={this.state.group.organizer}
                          group={this.state.group} />
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade" id="events-in-group">
                  {this._showEvents()}
                </div>

                <div role="tabpanel" className="tab-pane fade" id="group-members">
                  {this._showUsers()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    }
});

module.exports = GroupDetail;

var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var eventsIndex = require('./eventsIndex');
var EventIndexItem = require('./eventIndexItem');
var GroupIndexItem = require('./groupIndexItem');
var History = require('react-router').History;
var UserEditForm = require('./userEditForm');

var UserDetail = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { user: UserStore.find(parseInt(this.props.params.userId)) };
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchUser(parseInt(newProps.params.userId));
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(parseInt(this.props.params.userId));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  _toUserEditForm: function () {
    return <UserEditForm current_user={this.state.user} />;
  },

  _allowEdit: function () {
    if (window.current_user === this.state.user.id) {
      return (
        <div className="flex-center">
          <form>
            <a type="submit"
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#userEditFormModal">

              Edit your information.

            </a>
          </form>
        </div>
      );
    }
  },

  _showEvents: function () {
    if (this.state.user.events.length === 0) {
      return (<p>This user hath no events.</p>);
    } else {
      return (<div className="row">
          {this.state.user.events.map(function (event) {
            return (<EventIndexItem key={event.id} event={event}
              group={event.group} />);
            })}
        </div>);
    }
  },

  _showGroups: function () {
    if (this.state.user.groups.length === 0) {
      return (<p>This user hath no groups.</p>);
    } else {
      return (<div className="row">
        {this.state.user.groups.map(function (group) {
          return (<GroupIndexItem key={group.id} group={group} />);
        })}
      </div>);
    }
  },

  render: function () {
    if (this.state.user === undefined) { return <div></div>; }

    return (
      <div className="flex-center">
        <div className="paper-box info-box">
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
            <li role="presentation"><a href="#events-attending" aria-controls="events-attending" role="tab" data-toggle="tab">Events</a></li>
            <li role="presentation"><a href="#groups-membership" aria-controls="groups-membership" role="tab" data-toggle="tab">Groups</a></li>
          </ul>

          <div className="tab-content">

            <div role="tabpanel" className="tab-pane active fade in flex-center" id="profile">
              <br />
              {this._allowEdit()}
              <br />
            <div className="detail paper-box flex-center">
                <div className="row">
                  <div className="col-md-6 well text-center">
                    <br /><br />
                    <h2>{this.state.user.name}</h2>
                    <br /><br />
                    <p>{this.state.user.bio}</p>
                    <br />
                    <p>located @ {this.state.user.location}</p>
                    <br />
                    <p>{this.state.user.gender}</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <br />
                    <img src={this.state.user.avatar_url} />
                  </div>
                </div>
              </div>
            </div>

            <div role="tabpanel" className="tab-pane fade" id="events-attending">
              <br />
              {this._showEvents()}
            </div>

            <div role="tabpanel" className="tab-pane fade" id="groups-membership">
              <br />
              {this._showGroups()}
            </div>

          </div>
        </div>

        <div className="modal fade" id="userEditFormModal" tabIndex="-1" role="dialog" aria-labelledby="userEditFormModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {this._toUserEditForm()}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = UserDetail;

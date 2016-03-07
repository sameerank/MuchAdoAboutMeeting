var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/api_util');
var GroupIndexItem = require('./groupIndexItem');

var GroupsIndex = React.createClass({
  getInitialState: function () {
    return {
      groups: GroupStore.all()
    };
  },

  componentDidMount: function () {
    this.groupListener = GroupStore.addListener(this._onChange);
    ApiUtil.fetchGroups();
  },

  componentWillUnmount: function () {
    this.groupListener.remove()
  },

  _onChange: function () {
    this.setState({
      groups: GroupStore.all()
    });
  },

  _signIntoDemo: function () {
    ApiUtil.signIntoDemo();
  },

  render: function () {
    return (
      <section className="center-div items-index">

        <div className="modal fade" id="noEntryModal" tabIndex="-1" role="dialog" aria-labelledby="noEntryModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="noEntryModalLabel">Not signed in!</h4>
              </div>
              <div className="modal-body">
                <h3>Wouldst thou liketh to try the&nbsp;
                  <a
                    href="#"
                    onClick={this._signIntoDemo}>
                    demo
                  </a>
                        &nbsp;account?</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row groups-index">
            {
              this.state.groups.map(function (group) {
                return (
                  <div key={group.id}
                    data-toggle={window.current_user ? null : "modal" }
                    data-target={window.current_user ? null : "#noEntryModal" }>
                    <GroupIndexItem key={group.id} group={group} />
                  </div>);
              })
            }
          </div>
        </div>
      </section>
    );
  }
});

module.exports = GroupsIndex;

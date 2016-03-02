var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/api_util');
var GroupIndexItem = require('./groupIndexItem');

var GroupsSearch = React.createClass({
  getInitialState: function () {
    return {
      groups: GroupStore.findBySearch(this.props.searchQuery)
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
      groups: GroupStore.findBySearch(this.props.searchQuery)
    });
  },

  render: function () {
    return (
      <section>
        <div className="container group-index">
          <div className="row no-gutters">
            {
              this.state.groups.map(function (group) {
                return <GroupIndexItem key={group.id} group={group} />;
              })
            }
          </div>
        </div>
      </section>
    );
  }
});

module.exports = GroupsSearch;

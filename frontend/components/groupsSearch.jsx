var React = require('react');
var GroupStore = require('../stores/group');
var ApiUtil = require('../util/api_util');
var GroupIndexItem = require('./groupIndexItem');

var GroupsSearch = React.createClass({

  render: function () {

    var searchResults = function () {
      var resultsArray = GroupStore.findBySearch(this.props.searchQuery);
      return resultsArray.map(function (group) {
        return <GroupIndexItem key={group.id} group={group} />;
      });
    }.bind(this);

    return (
      <section>
        <div className="container group-index">
          <div className="row no-gutters">
            {
              searchResults()
            }
          </div>
        </div>
      </section>
    );
  }
});

module.exports = GroupsSearch;

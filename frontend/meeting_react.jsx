var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');

var UsersIndex = require('./components/usersIndex');
var UserDetail = require('./components/userDetail');
var UserEditForm = require('./components/userEditForm');
var EventsIndex = require('./components/eventsIndex');
var EventDetail = require('./components/eventDetail');
var EventForm = require('./components/eventForm');
var GroupsIndex = require('./components/groupsIndex');
var GroupDetail = require('./components/groupDetail');
var GroupForm = require('./components/groupForm');
var LandingPage = require('./components/landingPage');
var NoMatch = require('./components/noMatch');
var UnauthorizedAccess = require('./components/unauthorizedAccess');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="event/:eventId" component={EventDetail} />
    <Route path="eventForm" component={EventForm} />
    <Route path="group/:groupId" component={GroupDetail} />
    <Route path="groupForm" component={GroupForm} />
    <Route path="user/:userId" component={UserDetail} />
    <Route path="userEditForm" component={UserEditForm} />
    <Route path="unauthorizedAccess" component={UnauthorizedAccess} />
    <Route path="*" component={NoMatch} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});

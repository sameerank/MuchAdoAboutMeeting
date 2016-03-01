var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');

var UsersIndex = require('./components/usersIndex');
var UserDetail = require('./components/userDetail');
var EventsIndex = require('./components/eventsIndex');
var EventDetail = require('./components/eventDetail');
var GroupsIndex = require('./components/groupsIndex');
var GroupDetail = require('./components/groupDetail');
var GroupForm = require('./components/groupForm');
var LandingPage = require('./components/landingPage');


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="event/:eventId" component={EventDetail} />
    <Route path="group/:groupId" component={GroupDetail} />
    <Route path="groupForm" component={GroupForm} />
    <Route path="user/:userId" component={UserDetail} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Router>{routes}</Router>, root);
});

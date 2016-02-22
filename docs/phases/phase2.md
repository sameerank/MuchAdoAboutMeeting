# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

* Api::UsersController
* Api::EventsController
* Api::GroupsController

### Views

* api/users/show.json.jbuilder
* api/events/index.json.jbuilder
* api/events/show.json.jbuilder
* api/groups/index.json.jbuilder
* api/groups/show.json.jbuilder

## Flux
### Views (React Components)
* EventsIndex
  - EventsIndexItem
* EventForm
* GroupsIndex
  - GroupsIndexItem
* GroupForm
* GroupsIndex
  - GroupsIndexItem
* GroupForm

### Stores
* EventStore
* GroupStore
* CommentStore

### Actions
* ApiActions.receiveAllEvents
* ApiActions.receiveSingleEvent
* ApiActions.deleteEvent
* EventActions.fetchAllEvents -> triggers ApiUtil
* EventActions.fetchSingleEvent
* EventActions.createEvent
* EventActions.editEvent
* EventActions.destroyEvent
* GroupActions.fetchAllGroups -> triggers ApiUtil
* GroupActions.fetchSingleGroup
* GroupActions.createGroup
* GroupActions.editGroup
* GroupActions.destroyGroup
* CommentActions.fetchAllComments -> triggers ApiUtil
* CommentActions.fetchSingleComment
* CommentActions.createComment
* CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllEvents
* ApiUtil.fetchSingleEvent
* ApiUtil.createEvent
* ApiUtil.editEvent
* ApiUtil.destroyEvent
* ApiUtil.createGroup
* ApiUtil.editGroup
* ApiUtil.destroyGroup
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap

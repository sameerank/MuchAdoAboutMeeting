# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Event
* Group
* Comment

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::GroupController (create, destroy, index, show, update)
* Api::EventController (create, destroy, index, show, update)
* Api::CommentController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* shared/_nav-bar.html.erb
* events/new.html.erb
* events/show.html.erb
* groups/new.html.erb
* groups/show.html.erb
* groups/_left-side.html.erb
* groups/_right-side.html.erb

## Flux
### Views (React Components)

### Stores

* UserStore
* EventStore
* GroupStore
* CommentStore

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt (Gem)

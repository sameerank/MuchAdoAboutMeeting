# MuchAdoAboutMeeting

[Heroku link][heroku]

[heroku]: http://tranquil-citadel-25696.herokuapp.com/

## Minimum Viable Product

MuchAdoAboutMeeting is a web application inspired by Meetup (meetup.com) for thespian robots and Shakespeare plays. It is built using a Ruby on Rails backend and a React.js frontend. MuchAdoAboutMeeting allows users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Edit own profile and see groups that you are a member of
- [x] Browse, join, leave, or create groups
- [x] Browse, join, leave, or create events within groups
- [x] View the profiles of other members and see their group memberships


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 days)

**Objective:** Functioning rails project with authentication and functioning JSON API for models

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/sign-in pages
- [x] blank landing page after sign-in
- [x] make CRUD API for Events
- [x] make their data accessible through jBuilder views
  [x] apply CSS to format fonts and positioning

### Phase 2: Setup APIUtil (1 day)

**Objective:** User profile can be created, read, edited and destroyed through
the API.

- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] re-position elements

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Events can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each event component, building out the flux loop as needed.
  - [x] `EventsIndex`
  - [x] `EventIndexItem`
  - [x] `EventForm`
- [x] save Events to the DB when the form loses focus or is left idle
  after editing.
- [x] position elements

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [x] create a basic style guide
- [x] seed the database with test data
- [x] position elements on the page
- [x] add basic colors & styles
- [x] check and fix position of elements

### Phase 5: Groups (1 day)

**Objective:** Events belong to Groups, and can be viewed by Groups.

- [x] create `Group` model
- [x] build out API, Flux loop, and components for:
  - [x] Group CRUD
  - [x] viewing events by group
- [x] Use CSS to style new views
- [ ] Check and fix position of elements

Phase 3 adds organization to the Events. Events belong to a Group,
which has its own `Index` view.

### Phase 6: Tags (2 days)

**Objective:** Events can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- [ ] build out API, Flux loop, and components for:
- [ ] fetching tags for group
- [ ] adding tags to group
- [ ] creating tags while adding to group
- [ ] searching groups by tag
- [ ] Style new elements
- [ ] Enable notification icons in nav bar (user Pusher)

### Phase 7: Styling Cleanup and Seeding (2 days)

**objective:** Clean up styling and seed app with fun/interesting data.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [*] Refactor HTML classes & CSS rules
- [*] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Use geolocation and add Google maps view of upcoming event locations
- [ ] Show a user summary on hover over user profile picture or name
- [ ] Enable chatting between members
- [ ] Post comments on event pages



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

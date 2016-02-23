# MuchAdoAboutMeeting

[Heroku link][heroku]

[heroku]: http://tranquil-citadel-25696.herokuapp.com/

## Minimum Viable Product

MuchAdoAboutMeeting is a web application inspired by Meetup (meetup.com) built using Ruby on Rails
and React.js. MuchAdoAboutMeeting allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Edit own profile and see groups that you are a member of
- [ ] Browse, join, leave, or create groups
- [ ] Search, browse, join, leave, or create events within groups
- [ ] View the profiles of other members and see their group memberships


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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/sign-in pages
- [ ] blank landing page after sign-in
- [ ] make CRUD API for Events
- [ ] make their data accessible through jBuilder views
  [ ] apply CSS to format fonts and positioning

### Phase 2: Setup APIUtil (1 day)

**Objective:** User profile can be created, read, edited and destroyed through
the API.

- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] re-position elements

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Events can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each event component, building out the flux loop as needed.
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`
- [ ] save Events to the DB when the form loses focus or is left idle
  after editing.
- [ ] position elements

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] seed the database with test data
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] check and fix position of elements

### Phase 5: Groups (1 day)

**Objective:** Events belong to Groups, and can be viewed by Groups.

- [ ] create `Group` model
- build out API, Flux loop, and components for:
  - [ ] Group CRUD
  - [ ] adding events requires a group
  - [ ] viewing events by group
- [ ] Use CSS to style new views
- [ ] Check and fix position of elements

Phase 3 adds organization to the Events. Events belong to a Group,
which has its own `Index` view.

### Phase 6: Tags (2 days)

**Objective:** Events can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
- [ ] fetching tags for group
- [ ] adding tags to group
- [ ] creating tags while adding to group
- [ ] searching groups by tag
- [ ] Style new elements
- [ ] Enable notification icons in nav bar (user Pusher)

### Phase 7: Styling Cleanup and Seeding (2 days)

**objective:** Clean up styling and seed app with fun/interesting data.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

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

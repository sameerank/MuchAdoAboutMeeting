# MuchAdoAboutMeeting

[Heroku link][heroku]

[heroku]: http://tranquil-citadel-25696.herokuapp.com/

## Minimum Viable Product

MuchAdoAboutMeeting is a web application inspired by meetup.com built using Ruby on Rails
and React.js. MuchAdoAboutMeeting allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Edit own profile and see groups that you are a member of
- [ ] Browse, join, leave, or create groups
- [ ] Search, browse, join, leave, or create events within groups
- [ ] View the profiles of other members and see their group memberships
- [ ] Post comments on event pages

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
- [ ] seed the database with test data

### Phase 2: Setup APIUtil (0.5 days)

**Objective:** User profile can be created, read, edited and destroyed through
the API.

- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

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

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Groups (1 day)

**Objective:** Events belong to Groups, and can be viewed by Groups.

- [ ] create `Group` model
- build out API, Flux loop, and components for:
  - [ ] Group CRUD
  - [ ] adding events requires a group
  - [ ] viewing events by group
- Use CSS to style new views

Phase 3 adds organization to the Events. Events belong to a Group,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Events can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for group
  - [ ] adding tags to group
  - [ ] creating tags while adding to group
  - [ ] searching groups by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling (0.5 days)

**objective:** Enable complex styling.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

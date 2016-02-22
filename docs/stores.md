# Flux Stores

### EventStore

Holds all persisted note data.

##### Actions:
- `receiveAllEvents`
- `receiveSingleEvent`
- `removeEvent`

##### Listeners:
- `EventsIndex` (passes to `EventIndexItem` via props)
- `EventDetail`

### EventFormStore

Holds un-persisted event data to send to the API.

##### Actions:
- `receiveEventFormParams`

##### Listeners:
- `EventForm`

### GroupStore

Holds all persisted group data.

##### Actions:
- `receiveAllGroups`
- `receiveSingleGroup`
- `removeGroup`

##### Listeners:
- `GroupIndex`

### GroupFormStore

Holds un-persisted group data to send to the API.

##### Actions:
- `receiveGroupFormParams`

##### Listeners:
- `GroupForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`

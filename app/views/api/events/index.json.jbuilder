json.array! @events do |event|
  json.id event.id
  json.title event.title
  json.description event.description
  json.start_time event.start_time
  json.end_time event.end_time
  json.location event.location
  json.host_id event.host_id
  json.group_id event.group_id
  json.group event.group
  json.created_at event.created_at
  json.updated_at event.updated_at
end

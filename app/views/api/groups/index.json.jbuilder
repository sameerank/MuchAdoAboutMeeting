json.array! @groups do |group|
  json.id group.id
  json.title group.title
  json.description group.description
  json.location group.location
  json.banner_url group.banner_url
  json.organizer_id group.organizer_id
  json.created_at group.created_at
  json.updated_at group.updated_at
end

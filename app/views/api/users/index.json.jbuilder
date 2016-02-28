json.array! @users do |user|
  json.id user.id
  json.email user.email
  json.name user.name
  json.location user.location
  json.gender user.gender
  json.bio user.bio
  json.avatar_url user.avatar_url
  json.created_at user.created_at
  json.updated_at user.updated_at
end

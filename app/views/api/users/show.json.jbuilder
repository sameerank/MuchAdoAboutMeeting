json.extract! @user, :id, :email, :name, :location, :gender, :bio, :avatar_url,
:events_to_host, :groups_to_organize, :events, :groups, :created_at, :updated_at
json.events @user.events do |event|
  json.extract! event, :id, :title, :description, :location, :host, :group, :users
  json.start_time event.start_time.strftime("%l:%M %p")
  json.end_time event.end_time.strftime("%l:%M %p")
  json.created_at event.created_at.strftime("%A, %B %e, %Y")
end

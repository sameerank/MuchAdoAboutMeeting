json.extract! @user, :id, :email, :name, :location, :gender, :bio, :avatar_url,
:events_to_host, :groups_to_organize, :events, :groups, :created_at, :updated_at
json.events @user.events do |event|
  json.extract! event, :id, :title, :description, :start_time, :end_time, :location,
  :host, :group, :users, :created_at, :updated_at
end

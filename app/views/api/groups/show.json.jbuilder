json.extract! @group, :id, :title, :description, :location, :banner_url,
:organizer, :users, :user_groups, :events, :updated_at
json.created_at @group.created_at.strftime("%A, %B %e, %Y")

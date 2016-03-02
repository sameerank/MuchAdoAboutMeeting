json.extract! @event, :id, :title, :description, :location, :host, :group,
:users, :user_events
json.start_time @event.start_time.strftime("%A, %B %e, %Y, %l:%M %p")
json.end_time @event.end_time.strftime("%A, %B %e, %Y, %l:%M %p")
json.created_at @event.created_at.strftime("%A, %B %e, %Y")

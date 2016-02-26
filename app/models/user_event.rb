# == Schema Information
#
# Table name: user_events
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserEvent < ActiveRecord::Base

  validates :event_id, :user_id, presence: true
  validates :user_id, uniqueness: {scope: [:event_id]}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :event,
  primary_key: :id,
  foreign_key: :event_id,
  class_name: "Event"
end

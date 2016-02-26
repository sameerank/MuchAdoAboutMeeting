# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  start_time  :datetime         not null
#  end_time    :datetime
#  location    :string           not null
#  host_id     :integer          not null
#  group_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ActiveRecord::Base
  validates :title, :description, :start_time, :location, :host_id,
  :group_id, presence: true

  has_many :user_events,
  foreign_key: :event_id,
  primary_key: :id,
  class_name: "UserEvent"

  belongs_to :host,
  foreign_key: :host_id,
  primary_key: :id,
  class_name: "User"

  has_many :users,
  through: :user_events,
  source: :user

end

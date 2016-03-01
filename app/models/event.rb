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

  attr_accessor :start_time, :end_time, :host_id


  belongs_to :host,
  foreign_key: :host_id,
  primary_key: :id,
  class_name: 'User'

  belongs_to :group,
  foreign_key: :group_id,
  primary_key: :id,
  class_name: 'Group'


  has_many :user_events,
  foreign_key: :event_id,
  primary_key: :id,
  class_name: 'UserEvent'

  has_many :users,
  through: :user_events,
  source: :user


end

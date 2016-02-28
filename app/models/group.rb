# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text             not null
#  location     :string           not null
#  banner_url   :string           not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Group < ActiveRecord::Base
  validates :title, :description, :location, :banner_url, :organizer_id,
  presence: true

  belongs_to :organizer,
  foreign_key: :organizer_id,
  primary_key: :id,
  class_name: 'User'

  has_many :events,
  foreign_key: :group_id,
  primary_key: :id,
  class_name: 'Event'

  has_many :user_groups,
  foreign_key: :group_id,
  primary_key: :id,
  class_name: 'UserGroup'

  has_many :users,
  through: :user_groups,
  source: :user

end

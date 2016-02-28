# == Schema Information
#
# Table name: user_groups
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserGroup < ActiveRecord::Base

  validates :user_id, :group_id, presence: true
  validates :user_id, uniqueness: {scope: [:group_id]}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :group,
  primary_key: :id,
  foreign_key: :group_id,
  class_name: 'Group'
end

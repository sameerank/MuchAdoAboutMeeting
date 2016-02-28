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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

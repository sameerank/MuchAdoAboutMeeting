# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string
#  location        :string
#  gender          :string
#  bio             :text
#  avatar_url      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }


  has_many :events_to_host,
  foreign_key: :host_id,
  primary_key: :id,
  class_name: "Event"

  has_many :groups_to_organize,
  foreign_key: :organizer_id,
  primary_key: :id,
  class_name: 'Group'


  has_many :user_events,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: 'UserEvent'

  has_many :events,
  through: :user_events,
  source: :event


  has_many :user_groups,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: 'UserGroup'

  has_many :groups,
  through: :user_groups,
  source: :group


  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

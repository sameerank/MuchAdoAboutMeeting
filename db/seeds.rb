# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

event_count = 10
user_count = event_count * 4

user_count.times do |i|
  User.create(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    password_digest: Faker::Internet.password,
    session_token: Faker::Internet.password,
    location: Faker::Address.state,
    birthday: Faker::Date.between_except(1.year.ago, 1.year.from_now, Date.today),
    gender: 'Female',
    bio: Faker::Lorem.sentence,
    avatar_url: Faker::Avatar.image)
end

event_count.times do |i|
  Event.create(
    title: Faker::Lorem.word,
    description: Faker::Lorem.sentence,
    start_time: Faker::Date.between_except(1.year.ago, 1.year.from_now, Date.today),
    end_time: Faker::Date.between_except(1.year.ago, 1.year.from_now, Date.today),
    location: Faker::Address.state,
    host_id: rand(0..5),
    group_id: rand(0..10))
end

user_count.times do |i|
  UserEvent.create(
    user_id: rand(0..user_count),
    event_id: rand(0..event_count))
end

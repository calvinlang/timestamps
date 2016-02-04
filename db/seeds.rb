require 'faker'

# User.delete_all
# Restaurant.delete_all
# Review.delete_all

# 20.times do
#   User.create!( :first_name => Faker::Name.first_name,
#                 :last_name => "Savage",
#                 :email      => Faker::Internet.email,
#                 :password   => "password!2" )
# end

# 20.times do
#   Note.create!(user_id: rand(1..20), video_id: rand(1..5), body: Faker::Lorem.paragraph, time: "245")
# end

  Video.create!(title: "INDOOR SKYDIVING!!", link: "https://www.youtube.com/watch?v=gnXTBIkVNLI", category: "Sophisticated shit")


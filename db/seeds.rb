require 'faker'

# User.delete_all
# Restaurant.delete_all
# Review.delete_all

3.times do
  User.create!( :first_name => Faker::Name.first_name,
                :last_name => "Savage",
                :email      => Faker::Internet.email,
                :password   => "password" )
end

def random_time
	return rand(8).to_s + ":" + rand(60).to_s
end

60.times do
  Note.create!(user_id: rand(1..3), video_id: rand(1..3), body: Faker::Lorem.paragraph, time: random_time)
end

Video.create!(title: "Inflammatory Response", link: "https://www.youtube.com/watch?v=FXSuEIMrPQk", category: "Biology")
Video.create!(title: "Build A Woodworking Workbench", link: "https://www.youtube.com/watch?v=fg5qjed7u-k", category: "Woodworking")
Video.create!(title: "The Agricultural Revolution: Crash Course World History #1", link: "https://www.youtube.com/watch?v=Yocja_N5s1I", category: "History")
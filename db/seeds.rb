require 'faker'

# User.delete_all
# Restaurant.delete_all
# Review.delete_all

20.times.map do
  User.create!( :first_name => "Logan",
                :last_name => "Savage",
                :email      => Faker::Internet.email,
                :password   => "password!2" )
end

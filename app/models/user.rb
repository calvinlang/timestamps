class User < ActiveRecord::Base
  has_secure_password
  has_many :notes
  has_many :videos, through: :notes

  validates :email, uniqueness: true
  validates :username, uniqueness: true
end
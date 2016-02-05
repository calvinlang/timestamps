class Video < ActiveRecord::Base
  has_many :notes
  belongs_to :user

  validates :link, presence: true
end

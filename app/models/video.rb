class Video < ActiveRecord::Base
  has_many :notes

  validates :link, presence: true
end

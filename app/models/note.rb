class Note < ActiveRecord::Base
  belongs_to :user
  belongs_to :video

  validates :time, presence: true
end

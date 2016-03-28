class Room < ActiveRecord::Base

  has_many :users

  validates :room_name, presence: true

end

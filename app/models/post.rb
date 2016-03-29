class Post < ActiveRecord::Base

  belongs_to :user
  belongs_to :room

  validates :text, presence: true

  # def self.get_room_id
  #   self.new.room_id
  # end

end

sv886 = User.where(username: "sv886").first_or_create
sv886.password = "sv886"
sv886.save

if sv886.posts.empty?
  sv886.posts.create text: "aaayyy", room_id: 1
  sv886.posts.create text: "oooohhh!", room_id: 1
  sv886.posts.create text: "wuzzu room 2?", room_id: 2
end

bob = User.where(username: "bob").first_or_create
bob.password = "bob"
bob.save

if bob.posts.empty?
  bob.posts.create text: "bob wuz here", room_id: 1
  bob.posts.create text: "BOB WUZ HERE!", room_id: 2
  bob.posts.create text: "is bob here?", room_id: 2
end

room1 = Room.where(room_name: "room 1").first_or_create
room1.save

room2 = Room.where(room_name: "room 2").first_or_create
room2.save

json.posts @posts do |post|
  json.id post.id
  json.text post.text
  json.user_id post.user_id
  json.room_id post.room_id
  json.user do
    json.id post.user.id
    json.username post.user.username
  end
end

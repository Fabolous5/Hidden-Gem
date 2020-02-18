json.id @post.id
json.event_name @post.event_name
json.address @post.address
json.category @post.category
json.event_description @post.event_description
json.start_time @post.start_time
json.end_time @post.end_time
json.date @post.date
json.user_id @post.user_id
json.photo_url polymorphic_url(@post.photo) if @post.photo.attached?

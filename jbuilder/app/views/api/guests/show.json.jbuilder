
json.partial! 'api/guests/guest', guest: @guest

json.gifts @guest.gifts, partial: 'api/gifts/gift', as: :gift

# @guest.gifts.each do |gift|
#   json.partial! 'api/gifts/gift', gift: gift
# end

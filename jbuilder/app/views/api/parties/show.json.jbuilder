json.partial! 'api/parties/party', party: @party
json.guests @party.guests partial: 'api/guests/guest', as: :guest

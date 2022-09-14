# frozen_string_literal: true

json.id program_reservation.id
json.person do
  json.id program_reservation.person_id
  json.first_name program_reservation.person.first_name
  json.last_name program_reservation.person.last_name
  json.email program_reservation.person.email
  json.phone program_reservation.person.phone
  json.avatar program_reservation.person.avatar
  json.name_familiar program_reservation.person.name.familiar
end

json.attend program_reservation.attend
json.cancel_at_date program_reservation.cancel_at_date

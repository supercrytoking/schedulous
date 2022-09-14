# frozen_string_literal: true

json.data do
  json.array! @program_reservations, partial: "record_index", as: :program_reservation
end
json.capacity @program_instance.capacity
json.total_booked @total_booked
json.total_checked_in @total_checked_in
json.total_canceled @total_canceled

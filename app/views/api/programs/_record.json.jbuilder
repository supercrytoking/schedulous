# frozen_string_literal: true

json.id program.id
json.description program.description
json.name program.name
json.capacity program.capacity
json.start_date program.start_date
json.duration program.duration
json.image_url program.image.url
json.frequency program.frequency

json.program_timeslots_attributes do
  json.array! program.program_timeslots, :id, :friday, :hour, :meridiem, :minute,
    :monday, :saturday, :sunday, :thursday, :tuesday, :wednesday
end

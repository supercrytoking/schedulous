# frozen_string_literal: true

FactoryBot.define do
  factory :program_reservation do
    association(:person)
    association(:program_instance)
  end
end

# == Schema Information
#
# Table name: program_reservations
#
#  id                  :bigint           not null, primary key
#  attend              :boolean          default(FALSE)
#  cancel_at_date      :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  person_id           :bigint
#  program_instance_id :bigint
#
# Indexes
#
#  index_program_reservations_on_person_id            (person_id)
#  index_program_reservations_on_program_instance_id  (program_instance_id)
#

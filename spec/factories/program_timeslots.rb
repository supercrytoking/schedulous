# frozen_string_literal: true

FactoryBot.define do
  factory :program_timeslot do
    monday { false }
    tuesday { false }
    wednesday { false }
    thursday { false }
    friday { false }
    saturday { false }
    sunday { false }
    hour { 1 }
    minute { 1 }
    meridiem { "am" }
    program
    association :account
  end
end

# == Schema Information
#
# Table name: program_timeslots
#
#  id         :bigint           not null, primary key
#  friday     :boolean
#  hour       :integer
#  meridiem   :string
#  minute     :integer
#  monday     :boolean
#  saturday   :boolean
#  sunday     :boolean
#  thursday   :boolean
#  tuesday    :boolean
#  wednesday  :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  program_id :bigint
#
# Indexes
#
#  index_program_timeslots_on_account_id  (account_id)
#  index_program_timeslots_on_program_id  (program_id)
#

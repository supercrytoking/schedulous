# frozen_string_literal: true

FactoryBot.define do
  factory :program_instance do
    date { Date.current }
    program
    program_timeslot
    association :account
  end
end

# == Schema Information
#
# Table name: program_instances
#
#  id                  :bigint           not null, primary key
#  date                :date
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  account_id          :bigint
#  program_id          :bigint
#  program_timeslot_id :bigint
#
# Indexes
#
#  index_program_instances_on_account_id           (account_id)
#  index_program_instances_on_program_id           (program_id)
#  index_program_instances_on_program_timeslot_id  (program_timeslot_id)
#

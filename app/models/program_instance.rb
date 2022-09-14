# frozen_string_literal: true

class ProgramInstance < ApplicationRecord
  include AccountAsTenant

  belongs_to :program
  belongs_to :program_timeslot
  has_many :program_reservations, dependent: :destroy

  delegate :hour, :meridiem, :minute, to: :program_timeslot, allow_nil: true
  delegate :capacity, :description, :image_url, :name, to: :program, allow_nil: true
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

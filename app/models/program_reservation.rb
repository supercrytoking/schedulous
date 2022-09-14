# frozen_string_literal: true

class ProgramReservation < ApplicationRecord
  belongs_to :program_instance
  belongs_to :person

  scope :canceled, -> {
    where.not(cancel_at_date: nil)
  }
  scope :without_canceled, -> {
    where(cancel_at_date: nil)
  }
  scope :checked_in, -> {
    where(attend: true)
  }
  scope :by_program_instance, -> (id) {
    where(program_instance_id: id)
  }

  class << self
    def filter(params)
      program_reservations = by_program_instance(params[:program_instance_id])

      if params[:canceled].present?
        program_reservations = program_reservations.canceled
      else
        program_reservations = program_reservations.without_canceled
      end

      program_reservations
    end
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

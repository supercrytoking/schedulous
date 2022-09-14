# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProgramReservation, type: :model do
  describe "Associations" do
    it { should belong_to(:person) }
    it { should belong_to(:program_instance) }
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

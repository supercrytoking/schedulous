# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProgramReservationsCreationService, type: :service do
  describe "#perform" do
    it "returns program reservation" do
      person = create(:person)
      program = create(:program, capacity: 2)
      program_instance = create(:program_instance, program: program)

      params = attributes_for(:program_reservation).merge(
        person_id: person.id,
        program_instance_id: program_instance.id
      )
      program_reservation_service = ProgramReservationsCreationService.new(
        params
      )
      program_reservation = program_reservation_service.perform

      expect(program_reservation.person_id).to eq(person.id)
      expect(program_reservation.program_instance_id).to eq(program_instance.id)
    end

    it "returns errors when program is full" do
      person = create(:person)
      program = create(:program, capacity: 2)
      program_instance = create(:program_instance, program: program)
      create(:program_reservation, program_instance: program_instance, person: person)
      create(:program_reservation, program_instance: program_instance, person: person)

      params = attributes_for(:program_reservation).merge(
        person_id: person.id,
        program_instance_id: program_instance.id
      )
      program_reservation_service = ProgramReservationsCreationService.new(
        params
      )
      program_reservation = program_reservation_service.perform

      expect(program_reservation.errors).to be_present
    end
  end
end

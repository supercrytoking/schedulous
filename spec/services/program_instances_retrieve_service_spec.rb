# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProgramInstancesRetrieveService, type: :service do
  describe "#perform" do
    it "returns program instances " do
      program = create(:program, start_date: Date.current)
      timeslot = create(:program_timeslot, monday: true,
        tuesday: true, wednesday: true, thursday: true, friday: true,
        saturday: true, sunday: true, program: program
      )

      program_instance_retrieve_service = ProgramInstancesRetrieveService.new(
        start_date: 1.day.ago,
        end_date: 1.day.from_now,
      )
      program_instances = program_instance_retrieve_service.perform
      expect(program_instances.count).to eq(2)

      dayname = Date::DAYNAMES[Date.current.wday].downcase.to_sym
      timeslot.update(dayname => false)

      program_instance_retrieve_service = ProgramInstancesRetrieveService.new(
        start_date: 1.day.ago,
        end_date: 1.day.from_now,
      )
      program_instances = program_instance_retrieve_service.perform
      expect(program_instances.count).to eq(1)
    end
  end
end

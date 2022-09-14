# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ProgramInstancesController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    it "returns a list of programs" do
      create_list(:program, 5, start_date: Date.current, program_timeslots_attributes: [{
        monday: true, tuesday: true, wednesday: true,
        hour: 2, minute: 2, meridiem: 'am',
        thursday: true, friday: true, saturday: true, sunday: true
      }])
      get api_program_instances_url, headers: headers
      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.size).to eq(5)
    end
  end

  describe '#show' do
    it "returns a program_instance" do
      program_instance = create(:program_instance)
      get api_program_instance_url(program_instance), headers: headers
      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["id"]).to eq program_instance.id
    end
  end
end

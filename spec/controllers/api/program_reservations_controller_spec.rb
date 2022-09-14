# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ProgramReservationsController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    it "returns a list of program reservation" do
      program_instance = create(:program_instance)
      program_reservation1 = create(:program_reservation, program_instance: program_instance)
      program_reservation2 = create(:program_reservation, program_instance: program_instance)

      get api_program_reservations_url(program_instance_id: program_instance.id), headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      ids = parsed_response['data'].collect { |p| p['id'] }
      expect(ids.include?(program_reservation1.id)).to eq true
      expect(ids.include?(program_reservation2.id)).to eq true
    end
  end

  describe '#create' do
    describe "with valid params" do
      it "creates new program reservation" do
        person = create(:person)
        program = create(:program, capacity: 2)
        program_instance = create(:program_instance, program: program)
        expect {
          program_reservation_params = attributes_for(:program_reservation).merge(
            person_id: person.id,
            program_instance_id: program_instance.id
          )
          post api_program_reservations_url, params: { program_reservation: program_reservation_params }, headers: headers
        }.to change { ProgramReservation.count }.by(1)
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        create(:person)
        program = create(:program, capacity: 2)
        program_instance = create(:program_instance, program: program)

        program_reservation_params = attributes_for(:program_reservation).merge(
          person_id: '',
          program_instance_id: program_instance.id
        )

        post api_program_reservations_url, params: { program_reservation: program_reservation_params }, headers: headers

        expect(response.status).to eq(422)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['errors']).to be_present
      end
    end
  end

  describe '#cancel' do
    describe "with valid params" do
      it "update cancel_at_date success" do
        program_reservation = create(:program_reservation)
        patch cancel_api_program_reservation_url(program_reservation), params: {}, headers: headers

        expect(response.status).to eq(200)
        expect(program_reservation.reload.cancel_at_date.present?).to be_present
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        patch cancel_api_program_reservation_url(1000), params: {}, headers: headers

        expect(response.status).to eq(404)
      end
    end
  end

  describe '#checked in' do
    describe "with valid params" do
      it "update program_reservation success" do
        program_reservation = create(:program_reservation)
        old_attend = program_reservation.attend
        patch checked_in_api_program_reservation_url(program_reservation), params: {}, headers: headers

        expect(response.status).to eq(200)
        expect(program_reservation.reload.attend).to eq(!old_attend)
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        patch checked_in_api_program_reservation_url(1000), params: {}, headers: headers

        expect(response.status).to eq(404)
      end
    end
  end
end

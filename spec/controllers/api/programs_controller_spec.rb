# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::ProgramsController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    it "returns a list of programs" do
      create_list(:program, 5)
      get api_programs_url, headers: headers
      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.size).to eq(5)
    end
  end

  describe '#show' do
    it "returns a program" do
      program = create(:program)

      get api_program_url(program), headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["id"]).to eq program.id
    end
  end

  describe '#destroy' do
    it "destroys a program" do
      program = create(:program)

      delete api_program_url(program), headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["message"]).to be_present
    end
  end

  describe '#create' do
    describe "with valid params" do
      it "creates new program" do
        image = fixture_file_upload(Rails.root.join('spec/fixtures/assets/demo.png'), 'image/png')

        expect {
          program_params = attributes_for(:program).merge(image: image)
          post api_programs_url, params: { program: program_params }, headers: headers
        }.to change { Program.count }.by(1)
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        program_params = attributes_for(:program, name: '')
        post api_programs_url, params: { program: program_params }, headers: headers

        expect(response.status).to eq(422)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['errors']).to be_present
      end
    end
  end

  describe '#update' do
    describe "with valid params" do
      it "creates new program" do
        program = create(:program, name: "before edit")

        patch api_program_url(program), params: { program: {
          name: 'new name'
        } }, headers: headers

        expect(response.status).to eq(200)
        expect(program.reload.name).to eq('new name')
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        program = create(:program, name: "before edit")

        patch api_program_url(program), params: { program: {
          name: ''
        } }, headers: headers

        expect(response.status).to eq(422)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['errors']).to be_present
      end
    end
  end
end

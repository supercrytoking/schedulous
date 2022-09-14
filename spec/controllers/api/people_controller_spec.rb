# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::PeopleController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    it "returns a list of people" do
      person1 = create(:person)
      person2 = create(:person)

      get api_people_url, headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      ids = parsed_response.collect { |p| p['id'] }

      expect(ids.include?(person1.id)).to eq true
      expect(ids.include?(person2.id)).to eq true
    end
  end

  describe '#show' do
    it "returns a person" do
      person1 = create(:person)

      get api_person_url(person1), headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)

      expect(parsed_response["id"]).to eq person1.id
    end
  end

  describe '#create' do
    describe "with valid params" do
      it "creates new person" do
        expect {
          person_params = attributes_for(:person).merge(
            user_attributes: attributes_for(:user),
          )
          post api_people_url, params: { person: person_params }, headers: headers
        }.to change { Person.count }.by(1)
      end
    end

    skip "with invalid params" do
      it "returns errors" do
        person_params = attributes_for(:person)
        post api_people_url, params: { person: person_params }, headers: headers

        expect(response.status).to eq(422)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['errors']).to be_present
      end
    end
  end

  describe '#destroy' do
    it "destroys a person" do
      person = create(:person)

      delete api_person_url(person), headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["message"]).to be_present
    end
  end
end

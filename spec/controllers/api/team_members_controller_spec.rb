# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::TeamMembersController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    it "returns a list of team members" do
      team_member2 = create(:team_member, account: @account)

      get api_team_members_url, headers: headers

      expect(response.status).to eq(200)
      parsed_response = JSON.parse(response.body)
      ids = parsed_response.collect { |p| p['id'] }

      expect(ids).to include(team_member2.id)
      expect(ids.count).to eq(2)
    end
  end
end

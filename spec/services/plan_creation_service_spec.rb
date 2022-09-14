# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PlanCreationService, type: :service do
  before { StripeMock.start }
  after { StripeMock.stop }

  describe "#perform" do
    context "with valid data" do
      it "creates a new plan" do
        params = attributes_for(:plan)
        plan_service = PlanCreationService.new(params)
        plan = plan_service.perform
        expect(plan).to be_present
      end
    end

    context "with invalid data" do
      it "returns errors" do
        params = attributes_for(:plan, name: nil)
        plan_service = PlanCreationService.new(params)
        plan = plan_service.perform

        expect(plan).to be_blank
        expect(plan_service.errors).to be_present
        expect(plan_service.valid?).to be_falsey
      end
    end
  end
end

# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::PlansController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe "#index" do
    context "when not authorized" do
      it "returns 401" do
        @account.update(stripe_id: nil)

        get api_plans_url, headers: headers

        expect(response.status).to eq(401)
      end
    end

    context "when authorized" do
      context "when searching for untrashed plans" do
        it "returns a list of untrashed plans" do
          plan1 = create(:plan)
          plan2 = create(:plan, trashed: true)

          get api_plans_url, headers: headers

          expect(response.status).to eq(200)
          parsed_response = JSON.parse(response.body)
          ids = parsed_response.collect { |p| p['id'] }

          expect(ids.include?(plan1.id)).to eq true
          expect(ids.include?(plan2.id)).to eq false

          expect(parsed_response.count).to eq(1)
        end
      end

      context "when searching for trashed plans" do
        it "returns a list of trashed plans" do
          plan1 = create(:plan)
          plan2 = create(:plan, trashed: true)

          get api_plans_url(trashed: true), headers: headers

          expect(response.status).to eq(200)
          parsed_response = JSON.parse(response.body)
          ids = parsed_response.collect { |p| p['id'] }

          expect(ids.include?(plan1.id)).to eq false
          expect(ids.include?(plan2.id)).to eq true

          expect(parsed_response.count).to eq(1)
        end
      end
    end
  end

  describe "#create" do
    context "when not authorized" do
      it "returns 401" do
        @account.update(stripe_id: nil)

        post api_plans_url, headers: headers

        expect(response.status).to eq(401)
      end
    end

    context "when authorized" do
      context "with valid data" do
        it "creates a new plan" do
          account = Stripe::Account.create({
            type: 'custom',
            country: 'US',
            email: 'test@test.com',
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
          })

          @account.update(stripe_id: account.id)

          params = attributes_for(:plan)

          post api_plans_url, params: { plan: params }, headers: headers

          expect(response.status).to eq(201)
          parsed_response = JSON.parse(response.body)
          expect(parsed_response['name']).to eq(params[:name])
        end
      end

      context "with invalid data" do
        it "returns errors" do
          params = attributes_for(:plan, name: nil)

          post api_plans_url, params: { plan: params }, headers: headers

          expect(response.status).to eq(422)
          parsed_response = JSON.parse(response.body)
          expect(parsed_response['errors']).to be_present
        end
      end
    end
  end

  describe "#destroy" do
    context "when not authorized" do
      it "returns 401" do
        @account.update(stripe_id: nil)

        plan = create(:plan)

        delete api_plan_url(plan), headers: headers

        expect(response.status).to eq(401)
      end
    end

    context "when authorized" do
      it "trashes a plan" do
        plan = create(:plan)

        delete api_plan_url(plan), headers: headers

        expect(response.status).to eq(204)
        expect(plan.reload.trashed?).to eq(true)
      end
    end
  end

  describe "#show" do
    context "when not authorized" do
      it "returns 401" do
        @account.update(stripe_id: nil)

        plan = create(:plan)

        get api_plan_url(plan), headers: headers

        expect(response.status).to eq(401)
      end
    end

    context "when authorized" do
      it "returns a plan" do
        plan = create(:plan)

        get api_plan_url(plan), headers: headers

        expect(response.status).to eq(200)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['id']).to eq(plan.id)
      end
    end
  end
end

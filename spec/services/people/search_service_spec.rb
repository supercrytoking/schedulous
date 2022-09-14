# frozen_string_literal: true

require 'rails_helper'

RSpec.describe People::SearchService, type: :service do
  describe "#perform" do
    before do
      create(:person, name: "John Doe")
      create(:user, person: build(:person, name: "James"))
      create(:user, person: build(:person, name: "Gary"))
    end

    context "if params has_key q" do
      it "returns people that match the query" do
        params = { q: "John" }
        service = People::SearchService.new(params)
        people = service.perform
        expect(people.count).to eq(1)
        expect(people.first.name).to eq("John Doe")
      end
    end

    context "if params has_key users" do
      it "returns people that match the query" do
        params = { users: "true" }
        service = People::SearchService.new(params)
        people = service.perform
        expect(people.count).to eq(2)
      end
    end

    context "if no params provided" do
      it "returns all people" do
        service = People::SearchService.new({})
        people = service.perform
        expect(people.count).to eq(3)
      end
    end

    context "if params has_key q and users" do
      context "if incorrect data provided" do
        it "returns nobody" do
          params = { q: "John", users: "true" }
          service = People::SearchService.new(params)
          people = service.perform
          expect(people.count).to eq(0)
        end
      end

      context "if correct data provided" do
        it "returns people that are users that match the query" do
          params = { q: "James", users: "true" }
          service = People::SearchService.new(params)
          people = service.perform
          expect(people.count).to eq(1)
          expect(people.first.name).to eq("James")
        end
      end
    end
  end
end

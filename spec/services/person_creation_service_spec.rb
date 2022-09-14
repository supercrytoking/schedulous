# frozen_string_literal: true

require 'rails_helper'

RSpec.describe PersonCreationService, type: :service do
  describe "#perform" do
    context "supply user_id" do
      it "creates a new family for both old and new person" do
        user = create(:user)
        Family.destroy_all
        expect(Family.count).to eq(0)
        params = attributes_for(:person).merge(
          user_id: user.id
        )

        person_service = PersonCreationService.new(params)
        person = person_service.perform
        expect(Family.count).to eq(1)
        expect(person.family).to eq(user.person.family)
      end

      it "assigns new person to existing family" do
        user = create(:user)
        user.person.family = create(:family)
        expect(user.person.family).to be_present
        params = attributes_for(:person).merge(
          user_id: user.id
        )
        person_service = PersonCreationService.new(params)
        person = person_service.perform
        expect(person.family).to eq(user.person.family)
      end
    end

    context "supply family_id" do
      it "assigns new person to existing family" do
        family = create(:family)
        params = attributes_for(:person).merge(
          family_id: family.id
        )
        person_service = PersonCreationService.new(params)
        person = person_service.perform
        expect(person.family).to eq(family)
      end
    end

    context "supply new user" do
      it "creates new person along with user" do
        params = attributes_for(:person).merge(
          user_attributes: attributes_for(:user, email: "david@gmail.com")
        )
        person_service = PersonCreationService.new(params)
        person = person_service.perform
        expect(person.family).to be_blank
        expect(person.user.email).to eq("david@gmail.com")
      end
    end
  end
end

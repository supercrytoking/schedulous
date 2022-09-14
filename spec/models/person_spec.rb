# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe Person, type: :model do
  it_behaves_like "Account as a Tenant"

  describe 'sane factory' do
    it 'should be valid' do
      expect(build(:person)).to be_valid
    end
  end

  describe "Associations" do
    it { should have_one(:user).dependent(:destroy) }
    it { should have_one(:family_member).dependent(:destroy) }
    it { should have_one(:family).through(:family_member) }
    it { should have_many(:program_reservations) }
  end

  describe "conditional validations" do
    context "supply user_id" do
      it "returns valid person when user is found" do
        user = create(:user)
        person = build(:person, user_id: user.id)
        expect(person.valid?).to be_truthy
      end

      it "returns invalid person when user is not found" do
        person = build(:person, user_id: 12345)
        person.valid?
        expect(person.errors[:user_id]).to be_present
      end
    end

    context "supply family_id" do
      it "returns valid person when family is found" do
        family = create(:family)
        person = build(:person, family_id: family.id)
        expect(person.valid?).to be_truthy
      end

      it "returns invalid person when family is not found" do
        person = build(:person, family_id: 12345)
        person.valid?
        expect(person.errors[:family_id]).to be_present
      end
    end

    context "supply new user" do
      it "returns valid person when user is found" do
        user = build(:user)
        person = build(:person, user: user)
        expect(person.valid?).to be_truthy
      end

      skip "returns invalid person when user is not found" do
        person = build(:person)
        person.family_id = nil
        person.valid?
        expect(person.errors[:user]).to be_present
      end
    end
  end
end

# == Schema Information
#
# Table name: people
#
#  id         :bigint           not null, primary key
#  avatar     :string
#  dob        :date
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#
# Indexes
#
#  index_people_on_account_id  (account_id)
#

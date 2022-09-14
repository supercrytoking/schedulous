# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  phone                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  account_id             :bigint
#  person_id              :bigint
#
# Indexes
#
#  index_users_on_account_id            (account_id)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_person_id             (person_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe User, type: :model do
  it_behaves_like "Account as a Tenant"

  describe "sane factory" do
    it "should be valid" do
      expect(build(:user)).to be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:person).optional }
  end

  describe "after_create" do
    it "creates a person" do
      expect { User.create(name: "Josh", email: "josh@gmail.com", password: "Password+-09") }.to change { Person.count }.by(1)
    end
  end

  describe "#password_required?" do
    context "when skip_password is present" do
      it "returns false" do
        user = build(:user, skip_password: true)
        expect(user.password_required?).to be false
      end
    end

    context "when skip_password is not present" do
      it "returns true" do
        user = build(:user, skip_password: false)
        expect(user.password_required?).to be true
      end
    end
  end
end

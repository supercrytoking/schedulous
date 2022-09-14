# frozen_string_literal: true

# == Schema Information
#
# Table name: accounts
#
#  id                :bigint           not null, primary key
#  address           :string
#  city              :string
#  current_software  :string
#  interest_stage    :string
#  name              :string
#  phone             :string
#  state             :string
#  time_zone         :string
#  total_members     :string
#  unit              :string
#  years_in_business :string
#  zip               :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  stripe_id         :string
#
require 'rails_helper'

RSpec.describe Account, type: :model do
  describe "sane factory" do
    it "should be valid" do
      expect(build(:account)).to be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:people).dependent(:destroy) }
  end

  describe "Validations" do
    it { should validate_presence_of(:name) }
  end
end

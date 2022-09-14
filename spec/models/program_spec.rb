# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe Program, type: :model do
  it_behaves_like "Account as a Tenant"

  it { should accept_nested_attributes_for(:program_timeslots) }

  describe "Associations" do
    it { should have_many(:program_timeslots) }
  end

  describe "Validations" do
    it { should validate_presence_of(:name) }
  end
end

# == Schema Information
#
# Table name: programs
#
#  id          :bigint           not null, primary key
#  capacity    :integer
#  description :text
#  duration    :integer
#  image       :string
#  name        :string
#  start_date  :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  account_id  :bigint
#
# Indexes
#
#  index_programs_on_account_id  (account_id)
#

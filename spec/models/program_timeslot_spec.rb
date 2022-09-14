# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe ProgramTimeslot, type: :model do
  it_behaves_like "Account as a Tenant"

  describe "Associations" do
    it { should belong_to(:program) }
  end

  describe "Validations" do
    it { should validate_presence_of(:hour) }
    it { should validate_presence_of(:minute) }
    it { should validate_presence_of(:meridiem) }
  end
end

# == Schema Information
#
# Table name: program_timeslots
#
#  id         :bigint           not null, primary key
#  friday     :boolean
#  hour       :integer
#  meridiem   :string
#  minute     :integer
#  monday     :boolean
#  saturday   :boolean
#  sunday     :boolean
#  thursday   :boolean
#  tuesday    :boolean
#  wednesday  :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  program_id :bigint
#
# Indexes
#
#  index_program_timeslots_on_account_id  (account_id)
#  index_program_timeslots_on_program_id  (program_id)
#

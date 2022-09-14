# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe ProgramInstance, type: :model do
  it_behaves_like "Account as a Tenant"

  it { should belong_to(:program) }
  it { should belong_to(:program_timeslot) }
  it { should have_many(:program_reservations) }
  it { should delegate_method(:hour).to(:program_timeslot) }
  it { should delegate_method(:meridiem).to(:program_timeslot) }
  it { should delegate_method(:minute).to(:program_timeslot) }
  it { should delegate_method(:capacity).to(:program) }
  it { should delegate_method(:description).to(:program) }
  it { should delegate_method(:image_url).to(:program) }
  it { should delegate_method(:name).to(:program) }
end

# == Schema Information
#
# Table name: program_instances
#
#  id                  :bigint           not null, primary key
#  date                :date
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  account_id          :bigint
#  program_id          :bigint
#  program_timeslot_id :bigint
#
# Indexes
#
#  index_program_instances_on_account_id           (account_id)
#  index_program_instances_on_program_id           (program_id)
#  index_program_instances_on_program_timeslot_id  (program_timeslot_id)
#

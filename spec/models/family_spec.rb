# frozen_string_literal: true

# == Schema Information
#
# Table name: families
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#
# Indexes
#
#  index_families_on_account_id  (account_id)
#
require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe Family, type: :model do
  it_behaves_like "Account as a Tenant"

  describe 'sane factory' do
    it 'should be valid' do
      expect(build(:family)).to be_valid
    end
  end

  describe "Associations" do
    it { should have_many(:family_members) }
    it { should have_many(:people).through(:family_members) }
  end
end

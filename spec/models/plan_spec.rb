# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe Plan, type: :model do
  it_behaves_like "Account as a Tenant"

  describe "sane factory" do
    it "should be valid" do
      expect(build(:plan)).to be_valid
    end
  end

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:amount) }
  it { should validate_numericality_of(:amount).is_greater_than_or_equal_to(0) }
  it { should validate_presence_of(:interval) }
  it { should validate_numericality_of(:interval).is_greater_than_or_equal_to(1) }
  it { should validate_presence_of(:interval_type) }

  describe "scopes" do
    describe ".untrashed" do
      it "should return only untrashed plans" do
        create(:plan, trashed: true)
        create(:plan, trashed: false)
        expect(Plan.untrashed.count).to eq(1)
      end
    end

    describe ".trashed" do
      it "should return only trashed plans" do
        create(:plan, trashed: true)
        create(:plan, trashed: false)
        expect(Plan.trashed.count).to eq(1)
      end
    end
  end
end

# == Schema Information
#
# Table name: plans
#
#  id            :bigint           not null, primary key
#  amount        :decimal(8, 2)    default(0.0), not null
#  description   :string
#  interval      :integer          default(1), not null
#  interval_type :integer          default("day"), not null
#  name          :string           not null
#  trashed       :boolean          default(FALSE), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  account_id    :bigint
#  stripe_id     :string           not null
#
# Indexes
#
#  index_plans_on_account_id  (account_id)
#

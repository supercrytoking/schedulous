# frozen_string_literal: true

FactoryBot.define do
  factory :plan do
    association(:account)
    name { "MyString" }
    description { "MyText" }
    stripe_id { "prod_1234567890" }
    amount { 9.99 }
    interval { 1 }
    interval_type { :month }
    trashed { false }
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

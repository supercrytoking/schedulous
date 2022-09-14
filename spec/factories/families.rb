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
FactoryBot.define do
  factory :family do
    association :account
  end
end

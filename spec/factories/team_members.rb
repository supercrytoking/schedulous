# frozen_string_literal: true

FactoryBot.define do
  factory :team_member do
    association :user
    association :account
    role { :staff }
  end
end

# == Schema Information
#
# Table name: team_members
#
#  id         :bigint           not null, primary key
#  role       :integer          default("staff")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_team_members_on_account_id  (account_id)
#  index_team_members_on_user_id     (user_id)
#

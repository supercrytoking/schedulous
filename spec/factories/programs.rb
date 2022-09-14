# frozen_string_literal: true

FactoryBot.define do
  factory :program do
    name { Faker::Name.name }
    description { Faker::Lorem.word }
    capacity { 1 }
    start_date { Date.current }
    association :account
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

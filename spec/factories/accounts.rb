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
FactoryBot.define do
  factory :account do
    name { Faker::Company.name }
    address { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    zip { Faker::Address.zip }
    time_zone { "Pacific Time (US & Canada)" }
    stripe_id { "acct_1G4Z1wJZ2Z2Z2Z2Z" }\
  end
end

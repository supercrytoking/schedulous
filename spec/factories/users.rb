# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  phone                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  account_id             :bigint
#  person_id              :bigint
#
# Indexes
#
#  index_users_on_account_id            (account_id)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_person_id             (person_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "Name #{n}" }
    sequence(:email) { |n| "email-#{n}@email.com" }
    phone { "5555551212" }
    password { "Password@2" }
    association(:person)
    association(:account)
  end
end

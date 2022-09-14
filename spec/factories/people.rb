# frozen_string_literal: true

# == Schema Information
#
# Table name: people
#
#  id         :bigint           not null, primary key
#  avatar     :string
#  dob        :date
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#
# Indexes
#
#  index_people_on_account_id  (account_id)
#
FactoryBot.define do
  factory :person do
    first_name { "First Name" }
    last_name { "Last Name" }
    dob { 18.years.ago.to_date }
    association(:account)

    after(:build) do |instance|
      if instance.family_id.blank?
        family = create(:family)
        instance.family_id = family.id
      end
    end
  end
end

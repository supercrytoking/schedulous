# frozen_string_literal: true

class FamilyMember < ApplicationRecord
  include AccountAsTenant

  belongs_to :person
  belongs_to :family
end

# == Schema Information
#
# Table name: family_members
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  family_id  :bigint
#  person_id  :bigint
#
# Indexes
#
#  index_family_members_on_account_id  (account_id)
#  index_family_members_on_family_id   (family_id)
#  index_family_members_on_person_id   (person_id)
#

# frozen_string_literal: true

class Family < ApplicationRecord
  include AccountAsTenant

  has_many :family_members
  has_many :people, through: :family_members
end

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

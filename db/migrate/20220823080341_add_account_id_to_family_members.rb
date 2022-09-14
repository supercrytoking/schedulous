# frozen_string_literal: true

class AddAccountIdToFamilyMembers < ActiveRecord::Migration[6.1]
  def change
    add_reference :family_members, :account
  end
end

# frozen_string_literal: true

class AddAccountIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :account
  end
end

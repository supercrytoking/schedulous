# frozen_string_literal: true

class AddStripeUserIdToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :stripe_user_id, :string
  end
end

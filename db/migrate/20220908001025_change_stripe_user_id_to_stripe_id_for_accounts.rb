# frozen_string_literal: true

class ChangeStripeUserIdToStripeIdForAccounts < ActiveRecord::Migration[6.1]
  def change
    rename_column :accounts, :stripe_user_id, :stripe_id
  end
end

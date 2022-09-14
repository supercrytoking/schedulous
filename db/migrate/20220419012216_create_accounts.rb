# frozen_string_literal: true

class CreateAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :phone
      t.string :address
      t.string :unit
      t.string :city
      t.string :state
      t.string :zip
      t.string :time_zone
      t.timestamps
    end
  end
end

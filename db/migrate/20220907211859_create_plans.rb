# frozen_string_literal: true

class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.belongs_to :account
      t.string :name, null: false
      t.string :description
      t.string :stripe_id, null: false
      t.decimal :amount, precision: 8, scale: 2, null: false, default: 0.0
      t.integer :interval, null: false, default: 1
      t.integer :interval_type, null: false, default: 0
      t.boolean :trashed, null: false, default: false
      t.timestamps
    end
  end
end

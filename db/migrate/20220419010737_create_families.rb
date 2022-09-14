# frozen_string_literal: true

class CreateFamilies < ActiveRecord::Migration[6.1]
  def change
    create_table :families do |t|
      t.belongs_to :account
      t.timestamps
    end
  end
end

# frozen_string_literal: true

class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :avatar
      t.belongs_to :account

      t.date :dob

      t.timestamps
    end
  end
end

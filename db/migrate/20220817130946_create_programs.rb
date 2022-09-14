# frozen_string_literal: true

class CreatePrograms < ActiveRecord::Migration[6.1]
  def change
    create_table :programs do |t|
      t.string :name
      t.text :description
      t.integer :capacity
      t.date :start_date

      t.timestamps
    end
  end
end

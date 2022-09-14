# frozen_string_literal: true

class CreateProgramTimeslots < ActiveRecord::Migration[6.1]
  def change
    create_table :program_timeslots do |t|
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :saturday
      t.boolean :sunday
      t.integer :hour
      t.integer :minute
      t.string :meridiem
      t.references :program

      t.timestamps
    end
  end
end

# frozen_string_literal: true

class CreateProgramInstances < ActiveRecord::Migration[6.1]
  def change
    create_table :program_instances do |t|
      t.date :date
      t.references :program
      t.references :program_timeslot

      t.timestamps
    end
  end
end

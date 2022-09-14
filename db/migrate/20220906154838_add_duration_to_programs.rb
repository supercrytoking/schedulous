# frozen_string_literal: true

class AddDurationToPrograms < ActiveRecord::Migration[6.1]
  def change
    add_column :programs, :duration, :integer
  end
end

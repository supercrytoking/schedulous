# frozen_string_literal: true

class AddImageToProgram < ActiveRecord::Migration[6.1]
  def change
    add_column :programs, :image, :string
  end
end

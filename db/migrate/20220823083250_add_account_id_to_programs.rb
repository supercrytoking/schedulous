# frozen_string_literal: true

class AddAccountIdToPrograms < ActiveRecord::Migration[6.1]
  def change
    add_reference :programs, :account
  end
end

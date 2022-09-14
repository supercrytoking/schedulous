# frozen_string_literal: true

class AddAccountIdToProgramInstances < ActiveRecord::Migration[6.1]
  def change
    add_reference :program_instances, :account
  end
end

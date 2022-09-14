# frozen_string_literal: true

class AddAccountIdToProgramTimeslots < ActiveRecord::Migration[6.1]
  def change
    add_reference :program_timeslots, :account
  end
end

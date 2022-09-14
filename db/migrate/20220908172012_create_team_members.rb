# frozen_string_literal: true

class CreateTeamMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :team_members do |t|
      t.belongs_to :user
      t.belongs_to :account
      t.integer :role, default: 0
      t.timestamps
    end
  end
end

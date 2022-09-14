# frozen_string_literal: true

class CreateFamilyMembers < ActiveRecord::Migration[6.1]
  def change
    create_table :family_members do |t|
      t.belongs_to :family
      t.belongs_to :person
      t.timestamps
    end
  end
end

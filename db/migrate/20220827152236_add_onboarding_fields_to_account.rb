# frozen_string_literal: true

class AddOnboardingFieldsToAccount < ActiveRecord::Migration[6.1]
  def change
    %i[total_members years_in_business current_software interest_stage].each do |field|
      add_column :accounts, field, :string
    end
  end
end

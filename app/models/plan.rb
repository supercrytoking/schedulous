# frozen_string_literal: true

class Plan < ApplicationRecord
  include AccountAsTenant
  INTERVAL_TYPES = %i[day week month year].freeze

  enum interval_type: INTERVAL_TYPES

  validates :name, presence: true
  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :interval, presence: true, numericality: { greater_than_or_equal_to: 1 }
  validates :interval_type, presence: true, inclusion: { in: interval_types.keys }

  scope :trashed, -> { where(trashed: true) }
  scope :untrashed, -> { where(trashed: false) }

  def trash!
    update(trashed: true)
  end
end

# == Schema Information
#
# Table name: plans
#
#  id            :bigint           not null, primary key
#  amount        :decimal(8, 2)    default(0.0), not null
#  description   :string
#  interval      :integer          default(1), not null
#  interval_type :integer          default("day"), not null
#  name          :string           not null
#  trashed       :boolean          default(FALSE), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  account_id    :bigint
#  stripe_id     :string           not null
#
# Indexes
#
#  index_plans_on_account_id  (account_id)
#

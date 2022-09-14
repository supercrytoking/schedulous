# frozen_string_literal: true

class Account < ApplicationRecord
  has_many :people, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :name, presence: true

  after_commit do
    AccountSetupService.perform(self) unless users.empty?
  end

  def has_stripe?
    stripe_id.present?
  end
end

# == Schema Information
#
# Table name: accounts
#
#  id                :bigint           not null, primary key
#  address           :string
#  city              :string
#  current_software  :string
#  interest_stage    :string
#  name              :string
#  phone             :string
#  state             :string
#  time_zone         :string
#  total_members     :string
#  unit              :string
#  years_in_business :string
#  zip               :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  stripe_id         :string
#

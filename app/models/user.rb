# frozen_string_literal: true

class User < ApplicationRecord
  include AccountAsTenant

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  attr_accessor :name
  attr_accessor :skip_password

  belongs_to :person
  accepts_nested_attributes_for :person, allow_destroy: true
  accepts_nested_attributes_for :account, allow_destroy: true

  before_validation :set_person, on: :create, if: proc { person.blank? }
  validates :name, presence: true, on: :create, unless: :person_present?

  def set_person
    self.build_person(name: self.name, account: self.account)
  end

  def password_required?
    return false if skip_password.present?
    super
  end

  def person_present?
    person.present?
  end

  def admin?
    false
  end
end

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  phone                  :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  account_id             :bigint
#  person_id              :bigint
#
# Indexes
#
#  index_users_on_account_id            (account_id)
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_person_id             (person_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

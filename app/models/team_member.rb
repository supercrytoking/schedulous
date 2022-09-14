# frozen_string_literal: true

class TeamMember < ApplicationRecord
  include AccountAsTenant

  belongs_to :user

  enum role: {
    staff: 0,
    admin: 1,
    owner: 2
  }

  validates :user, presence: true
  validates :role, presence: true, inclusion: { in: roles.keys }
end

# == Schema Information
#
# Table name: team_members
#
#  id         :bigint           not null, primary key
#  role       :integer          default("staff")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_team_members_on_account_id  (account_id)
#  index_team_members_on_user_id     (user_id)
#

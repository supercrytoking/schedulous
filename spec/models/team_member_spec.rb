# frozen_string_literal: true

require 'rails_helper'

RSpec.describe TeamMember, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:role) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
  end
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

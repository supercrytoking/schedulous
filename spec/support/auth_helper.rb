# frozen_string_literal: true

require 'spec_helper'

module AuthHelper
  def login_user
    user = create(:user, account: @account)
    create(:team_member, user: user, account: @account)
    sign_in user
  end
end

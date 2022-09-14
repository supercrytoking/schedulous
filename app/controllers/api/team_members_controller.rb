# frozen_string_literal: true

class Api::TeamMembersController < ApiController
  def index
    @team_members = TeamMember.includes(user: :person).all
  end
end

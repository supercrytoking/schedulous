# frozen_string_literal: true

json.array! @team_members, partial: "record", as: :team_member

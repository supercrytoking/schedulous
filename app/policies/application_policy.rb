# frozen_string_literal: true

module ApplicationPolicy
  extend KittyPolicy::DSL

  can :manage, Plan do |user|
    # TODO Require user to be an admin
    user.account.has_stripe?
  end
end

# frozen_string_literal: true

class AuthenticationsController < ApplicationController
  before_action :redirect_to_dashboard_if_signed_in

  def login
    render template: 'react/index'
  end

  def signup
    render template: 'react/index'
  end
end

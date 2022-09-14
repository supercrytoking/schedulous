# frozen_string_literal: true

class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token

  set_current_tenant_through_filter
  before_action :authenticate_user!
  before_action :set_tenant

  private

  rescue_from KittyPolicy::AccessDenied do |exception|
    render json: { errors: exception.message }, status: :unauthorized
  end

  def current_account
    account_id = request.headers['HTTP_ACCOUNT_ID']
    Account.find_by(id: account_id) || current_user.account
  end

  def set_tenant
    set_current_tenant(current_account)
  end
end

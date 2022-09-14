# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def redirect_to_dashboard_if_signed_in
    redirect_to "/dashboard" if user_signed_in?
  end

  private
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, account_attributes: [:name]])
    end
end

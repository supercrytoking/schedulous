# frozen_string_literal: true

class Api::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  include DeviseRenderResource

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: resource
    else
      invalid_resource(resource)
    end
  end

  def respond_to_on_destroy
    head :no_content
  end
end

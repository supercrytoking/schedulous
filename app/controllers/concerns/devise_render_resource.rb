# frozen_string_literal: true

module DeviseRenderResource
  extend ActiveSupport::Concern

  def render_resource(resource)
    if resource.errors.empty?
      render json: resource
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: resource.errors
    }, status: :bad_request
  end

  def invalid_resource(resource)
    render json: {
      errors: { email: ["email or password was incorrect"] }
    }, status: :unauthorized
  end
end

# frozen_string_literal: true

class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  include DeviseRenderResource

  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save

    render_resource(resource)
  end
end

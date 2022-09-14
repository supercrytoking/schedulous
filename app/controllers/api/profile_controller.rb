# frozen_string_literal: true

class Api::ProfileController < ApiController
  def index
    render :show
  end
end

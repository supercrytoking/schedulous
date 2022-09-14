# frozen_string_literal: true

class Api::ProgramInstancesController < ApiController
  before_action :set_program, only: [:show, :update, :destroy]

  def index
    program_instance_retrieve_service = ProgramInstancesRetrieveService.new(params)
    @program_instances = program_instance_retrieve_service.perform
  end

  def show; end

  private

  def set_program
    @program_instance = ProgramInstance.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { alert: e.message }, status: 404
  end
end

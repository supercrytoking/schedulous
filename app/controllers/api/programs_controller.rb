# frozen_string_literal: true

class Api::ProgramsController < ApiController
  before_action :set_program, only: [:show, :update, :destroy]

  def index
    @programs = Program.all
  end

  def show; end

  def create
    @program = Program.new(program_params)

    if @program.save
      render :show
    else
      render json: { errors: @program.errors }, status: :unprocessable_entity
    end
  end

  def update
    @program.assign_attributes(program_params)

    # Workaround for this issue: "index_errors does not consider indexes of correct existing sub records"
    # related to: https://github.com/rails/rails/issues/24390 and https://github.com/rails/rails/pull/24728
    @program.program_timeslots.each { |a| a.updated_at = Time.current }

    if @program.save
      render :show
    else
      render json: { errors: @program.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @program.destroy
    render json: { message: "Program has been deleted successfully." }
  end

  private

  def set_program
    @program = Program.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { alert: e.message }, status: 404
  end

  def program_params
    params.require(:program).permit(
      :name, :description, :capacity, :start_date, :image, :duration,
      program_timeslots_attributes: [
        :id,
        :friday,
        :hour,
        :meridiem,
        :minute,
        :monday,
        :saturday,
        :sunday,
        :thursday,
        :tuesday,
        :wednesday,
        :_destroy
      ]
    )
  end
end

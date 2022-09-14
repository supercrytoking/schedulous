# frozen_string_literal: true

class Api::ProgramReservationsController < ApiController
  before_action :set_program_reservation, only: [:cancel, :checked_in]
  before_action :validate_cancellation, only: [:cancel]
  before_action :set_program, only: [:index]

  def index
    @program_reservations = ProgramReservation.filter(params)
    @total_booked = ProgramReservation.by_program_instance(params[:program_instance_id]).without_canceled.size
    @total_checked_in = ProgramReservation.by_program_instance(params[:program_instance_id]).checked_in.size
    @total_canceled = ProgramReservation.by_program_instance(params[:program_instance_id]).canceled.size
  end

  def create
    program_reservation_service = ProgramReservationsCreationService.new(program_reservation_params)
    @program_reservation = program_reservation_service.perform

    if @program_reservation.errors.blank?
      render :show
    else
      render json: { errors: @program_reservation.errors }, status: :unprocessable_entity
    end
  end

  def cancel
    @program_reservation.cancel_at_date = Date.current
    if @program_reservation.save
      render :show
    else
      render json: { errors: @program_reservation.errors }, status: :unprocessable_entity
    end
  end

  def checked_in
    @program_reservation.attend = !@program_reservation.attend
    if @program_reservation.save
      render :show
    else
      render json: { errors: @program_reservation.errors }, status: :unprocessable_entity
    end
  end

  private

  def validate_cancellation
    render json: { alert: "Program reservation was canceled." } if @program_reservation.cancel_at_date.present?
  end

  def set_program
    @program_instance = ProgramInstance.find(params[:program_instance_id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { alert: e.message }, status: 404
  end

  def set_program_reservation
    @program_reservation = ProgramReservation.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { alert: e.message }, status: 404
  end

  def program_reservation_params
    params.require(:program_reservation).permit(
      :person_id,
      :program_instance_id,
      :attend,
      :cancel_at_date
    )
  end
end

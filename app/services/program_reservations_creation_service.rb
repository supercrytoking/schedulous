# frozen_string_literal: true

class ProgramReservationsCreationService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def perform
    program_reservation = ProgramReservation.new(params)
    return program_reservation if program_reservation.invalid?

    if is_program_capacity_full?
      program_reservation.errors.add(:program, "Program is full")
      return program_reservation
    end

    program_reservation.save
    program_reservation
  end

  private

  def is_program_capacity_full?
    get_num_of_program_reservation.size >= program_instance.capacity.to_f
  end

  def get_num_of_program_reservation
    @capacity_program_reservation ||= ProgramReservation.by_program_instance(params[:program_instance_id]).without_canceled
  end

  def program_instance
    @program_instance ||= ProgramInstance.find_by(id: params[:program_instance_id])
  end
end

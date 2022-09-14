# frozen_string_literal: true

class ProgramInstancesRetrieveService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def perform
    create_or_destroy_program_instances_in_time_range
    ProgramInstance.where(date: [start_date..end_date])
  end

  private

  def create_or_destroy_program_instances_in_time_range
    program_timeslots.each do |program_timeslot|
      start = [start_date, program_timeslot.program.start_date].max

      (start..end_date).each do |date|
        dayname = Date::DAYNAMES[date.wday].downcase.to_sym

        program_instance = ProgramInstance.find_or_initialize_by(
          date: date,
          program_timeslot: program_timeslot,
          program: program_timeslot.program
        )

        if program_timeslot.send(dayname) && program_instance.new_record?
          program_instance.save
        elsif !program_timeslot.send(dayname) && program_instance.persisted?
          program_instance.destroy
        end
      end
    end
  end

  def program_timeslots
    @program_timeslots ||= ProgramTimeslot.where(
      program_id: programs.pluck(:id)
    ).includes(:program)
  end

  def programs
    @programs ||= Program.started_in_range(start_date, end_date)
  end

  def start_date
    if params[:start_date].present?
      params[:start_date].to_date rescue Date.current
    else
      Date.current
    end
  end

  def end_date
    if params[:end_date].present?
      params[:end_date].to_date rescue Date.current
    else
      Date.current
    end
  end
end

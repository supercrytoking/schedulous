# frozen_string_literal: true

class Program < ApplicationRecord
  include AccountAsTenant

  mount_uploader :image, ImageUploader

  has_many :program_timeslots, dependent: :destroy, index_errors: true

  accepts_nested_attributes_for :program_timeslots, allow_destroy: true, reject_if: :all_blank

  validates :name, presence: true

  scope :started_in_range, -> (start_date, end_date) {
    where("start_date < ?", start_date).or(
      where(start_date: [start_date..end_date])
    )
  }

  def frequency
    dayname_hash = {
      'sunday' => 'S',
      'monday' => 'M',
      'tuesday' => 'T',
      'wednesday' => 'W',
      'thursday' => 'Th',
      'friday' => 'F',
      'saturday' => 'S'
    }
    daynames = dayname_hash.keys
    frequency_hash = {}

    program_timeslots.each do |program_timeslot|
      selected_days = daynames.select { |d| program_timeslot.send(d) }
      frequency_key = if selected_days.count == daynames.count
        'Daily'
      else
        dayname_hash.select { |k, v| selected_days.include? k }.values.join('')
      end

      frequency_hash[frequency_key] = [] unless frequency_hash[frequency_key]
      frequency_hash[frequency_key].push(
        "#{modify_time(program_timeslot.hour)}:#{modify_time(program_timeslot.minute)}#{program_timeslot.meridiem}"
      )
    end

    frequency_hash.map do |k, v|
      v = v.uniq.sort.join(', ')
      "#{k}@#{v}"
    end.join(', ')
  end

  def modify_time(time)
    time < 10 ? "0#{time}" : time
  end
end

# == Schema Information
#
# Table name: programs
#
#  id          :bigint           not null, primary key
#  capacity    :integer
#  description :text
#  duration    :integer
#  image       :string
#  name        :string
#  start_date  :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  account_id  :bigint
#
# Indexes
#
#  index_programs_on_account_id  (account_id)
#

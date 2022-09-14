# frozen_string_literal: true

class BaseService
  def self.perform(*args)
    new(*args).perform
  end

  def valid?
    errors.empty?
  end

  def errors
    @errors || {}
  end

  def add_errors(errors)
    @errors ||= {}
    @errors = @errors.merge(errors)
    false
  end
end

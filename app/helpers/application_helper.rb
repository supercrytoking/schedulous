# frozen_string_literal: true

module ApplicationHelper
  def selected_if_true(expression)
    !!expression ? 'selected' : ''
  end

  def hide_header?
    @hide_header
  end

  def hide_header
    @hide_header = true
  end

  def react?
    true
  end
end

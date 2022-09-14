# frozen_string_literal: true

module AdminHelper
  def admin_subnav_link_class(condition = false)
    "admin-v__link #{condition ? "admin-nav__link--selected" : ""}"
  end

  def admin_subnav_link(title:, url:, icon:, condition:)
    link_to url, class: admin_subnav_link_class(condition) do
      concat content_tag(:i, "", class: icon)
      concat content_tag(:span, title)
    end
  end

  def admin_header_title
    content_for(:admin_header_title).present? ? content_for(:admin_header_title) : controller.controller_name.capitalize
  end
end

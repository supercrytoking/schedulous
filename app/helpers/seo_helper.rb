# frozen_string_literal: true

module SeoHelper
  def application_title(app_name:, separator:)
    title = content_for(:page_title)
    full_title = content_for(:full_page_title)

    if full_title
      full_title
    elsif content_for(:page_title_reverse) == true
      [app_name, title].compact.join(separator)
    else
      [app_name, title].reverse.compact.join(separator)
    end
  end

  def page_title(options = {})
    content_for(:page_title_reverse, true) if options[:reverse]
    content_for(:page_title, options[:page_title]) if options[:page_title]
    content_for(:full_page_title, options[:full_page_title]) if options[:full_page_title]
  end

  def og_title
    if content_for(:og_title)
      content_for(:og_title)
    elsif content_for(:page_title)
      content_for(:page_title)
    elsif content_for(:full_page_title)
      content_for(:full_page_title)
    end
  end

  def og_image
    if content_for(:og_image)
      content_for(:og_image)
    else
      asset_path 'facebook.png'
    end
  end

  def og_description
    content_for(:og_description) || description
  end

  def description
    content_for(:description) || "Default description"
  end
end

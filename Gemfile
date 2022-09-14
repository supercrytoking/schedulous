# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.6"

gem 'acts_as_tenant', '~> 0.5.0'
gem "acts_as_list"
gem "airbrake"
gem "annotate"
gem "aws-sdk-s3"
gem "bootsnap", ">= 1.4.4", require: false
gem 'brakeman'
gem "carrierwave"
gem "devise"
gem "devise-async"
gem "faker"
gem "flipper"
gem "flipper-active_record"
gem "flipper-ui"
gem "fog-aws"
gem "font-awesome-sass", "~> 5.15.1"
gem "friendly_id"
gem "geocoder"
gem "stimulus-rails"
gem "httparty"
gem "image_processing", "~> 1.2"
gem "importmap-rails"
gem "invisible_captcha"
gem "jbuilder", "~> 2.7"
gem "kitty_policy"
gem "name_of_person"
gem "omniauth"
gem "omniauth-stripe-connect"
gem "pagy"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "rails", "~> 6.1.4", ">= 6.1.4.1"
gem "resque"
gem "sass-rails", ">= 6"
gem "simple_form"
gem "slack-notifier"
gem "stripe", "< 6.0", ">= 2.8"
gem "stripe_event"
gem "turbo-rails"
gem "webpacker"
gem "yt"

group :development, :test do
  gem "byebug", platforms: %i[mri mingw x64_mingw]
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "pry-rails"
  gem "rspec-rails"
  gem "rubocop-rails", require: false
  gem "shoulda", "~> 4.0.0"
  gem "shoulda-matchers", "~> 4.5.1"
  gem 'wdm', '>= 0.1.0'
end

group :development do
  gem "letter_opener"
  gem "letter_opener_web"
  gem "listen", "~> 3.3"
  # gem "rack-mini-profiler", "~> 2.0"
  gem "bullet"
  gem "web-console", ">= 4.1.0"
end

group :test do
  gem "capybara", ">= 3.26"
  gem "launchy"
  gem "selenium-webdriver"
  gem "webdrivers"
  gem "stripe-ruby-mock", "~> 3.0.1", require: "stripe_mock"
end

gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Use Redis for Action Cable
gem "redis", "~> 4.0"

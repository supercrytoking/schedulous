# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :stripe_connect, callback: '/manage/callbacks/stripe'
end

# frozen_string_literal: true

require "stripe_event"

Stripe.api_key = ENV['STRIPE_SECRET_KEY']

STRIPE_JS_HOST = 'https://js.stripe.com' unless defined?(STRIPE_JS_HOST)

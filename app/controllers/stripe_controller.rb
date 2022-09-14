# frozen_string_literal: true

class StripeController < ApplicationController
  def index
    redirect_to stripe_authentication_path
  end

  def callback
    response = Stripe::OAuth.token(
      code: params[:code],
      grant_type: 'authorization_code'
    )

    current_user.account.update(stripe_id: response.stripe_user_id)

    redirect_to "/settings/payments"
  end

  private
    def stripe_authentication_path
      stripe_url = 'https://connect.stripe.com/oauth/authorize'
      redirect_uri = stripe_callback_url
      client_id = ENV['STRIPE_CLIENT_ID']

      "#{stripe_url}?response_type=code&redirect_uri=#{redirect_uri}&client_id=#{client_id}&suggested_capabilities[]=transfers&suggested_capabilities[]=card_payments&scope=read_write"
    end
end

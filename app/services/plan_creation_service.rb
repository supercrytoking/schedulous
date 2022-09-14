# frozen_string_literal: true

class PlanCreationService < BaseService
  def initialize(plan_params)
    @plan = Plan.new(plan_params)
  end

  def perform
    if @plan.valid?
      create_plan
      @plan
    else
      add_errors(@plan.errors)
    end
  end

  private
    def create_plan
      stripe_product = Stripe::Product.create({ name: @plan.name, type: "service" }, stripe_account: @plan.account.stripe_id)

      stripe_plan = Stripe::Plan.create({
          amount: (@plan.amount * 100).to_i,
          interval: @plan.interval_type.to_s,
          interval_count: @plan.interval,
          product: stripe_product.id,
          currency: "usd"
        },
        stripe_account: @plan.account.stripe_id
      )

      @plan.stripe_id = stripe_plan.id
      @plan.save
    rescue Stripe::StripeError => e
      add_errors({ stripe: e.message })
    end
end

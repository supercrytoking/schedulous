# frozen_string_literal: true

class Api::PlansController < ApiController
  before_action :authorize_plan_management!

  def index
    @plans = params.key?(:trashed) ? Plan.trashed : Plan.untrashed
  end

  def show
    @plan = Plan.find(params[:id])
  end

  def create
    plan_creation_service = PlanCreationService.new(plan_creation_params)
    @plan = plan_creation_service.perform

    if plan_creation_service.valid?
      render :show, status: :created
    else
      render json: { errors: plan_creation_service.errors }, status: :unprocessable_entity
    end
  end

  def update
    @plan = Plan.find(params[:id])

    if @plan.update(plan_update_params)
      render :show
    else
      render json: { errors: @plan.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @plan = Plan.find(params[:id])
    @plan.trash!

    head :no_content
  end

  private
    def plan_creation_params
      params.require(:plan).permit(
        :name,
        :amount,
        :interval,
        :interval_type
      )
    end

    def plan_update_params
      params.require(:plan).permit(
        :name,
        :amount,
      )
    end

    def authorize_plan_management!
      ApplicationPolicy.authorize! current_user, :manage, Plan
    end
end

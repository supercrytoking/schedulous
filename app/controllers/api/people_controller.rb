# frozen_string_literal: true

class Api::PeopleController < ApiController
  before_action :set_person, only: [:show, :update, :destroy]

  def index
    @people = People::SearchService.new(params).perform
  end

  def autocomplete
    @people = People::SearchService.new(params.merge({ limit: 6 })).perform
  end

  def show
  end

  def create
    person_creation_service = PersonCreationService.new(person_creation_params)
    @person = person_creation_service.perform

    if @person.persisted?
      render :show, status: :created
    else
      render json: { errors: @person.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @person.destroy
    render json: { message: "Person has been deleted successfully." }
  end

  private

  def set_person
    @person = Person.includes(:user).find(params[:id])
  end

  def person_creation_params
    params.require(:person).permit(
      :name,
      :first_name,
      :last_name,
      :dob,
      :avatar,
      :user_id,
      :family_id,
      user_attributes: [
        :id,
        :email,
        :phone,
        :password,
        :password_confirmation,
        :skip_password
      ]
    )
  end
end

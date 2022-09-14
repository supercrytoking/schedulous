# frozen_string_literal: true

class People::SearchService
  def initialize(params)
    @query = params[:q]
    @only_users = params[:users] == 'true'
    @limit = params[:limit].to_i
  end

  def perform
    people = Person.includes(:user)
    people = people.left_outer_joins(:user).where("users.person_id = people.id").where("users.id IS NOT NULL") if @only_users
    people = people.where('people.first_name ILIKE ?', "%#{@query}%").or(people.where('people.last_name ILIKE ?', "%#{@query}%")) if @query.present?
    people = people.limit(@limit) if @limit > 0
    people
  end
end

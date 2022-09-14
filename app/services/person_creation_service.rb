# frozen_string_literal: true

class PersonCreationService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def perform
    person = Person.new(params)

    if supply_a_user_id?
      find_or_init_new_family_for_people_by_existing_user(person)
    elsif supply_a_family_id?
      set_family_for(person)
    end

    person.save
    person
  end

  private

  def supply_a_user_id?
    params[:user_id].present?
  end

  def supply_a_family_id?
    params[:family_id].present?
  end

  def find_or_init_new_family_for_people_by_existing_user(person)
    return if user.blank?

    family = user.person.family || Family.new

    if family.new_record?
      # NOTE: Create a Family record and a FamilyMember record for the Person associated with that user_id that was supplied

      person.build_family_member
      family.people << user.person
    end

    person.family = family
  end

  def set_family_for(person)
    person.family = family
  end

  def user
    @user ||= User.find_by(id: params[:user_id])
  end

  def family
    @family ||= Family.find_by(id: params[:family_id])
  end
end

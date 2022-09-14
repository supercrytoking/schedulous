# frozen_string_literal: true

json.id current_user.id
json.name current_user.person.name
json.name_familiar current_user.person.name.familiar
json.email current_user.email
json.phone current_user.phone
json.account_id current_user.account.id
json.person_id current_user.person.id
json.created_at current_user.created_at
json.updated_at current_user.updated_at
json.account do
  json.extract! current_user.account, :id, :address, :city, :current_software, :interest_stage, :name, :phone, :state, :time_zone, :total_members, :unit, :years_in_business, :zip
  json.has_stripe current_user.account.has_stripe?
end

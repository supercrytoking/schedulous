# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_08_172012) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "address"
    t.string "unit"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "time_zone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "total_members"
    t.string "years_in_business"
    t.string "current_software"
    t.string "interest_stage"
    t.string "stripe_id"
  end

  create_table "families", force: :cascade do |t|
    t.bigint "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_families_on_account_id"
  end

  create_table "family_members", force: :cascade do |t|
    t.bigint "family_id"
    t.bigint "person_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.index ["account_id"], name: "index_family_members_on_account_id"
    t.index ["family_id"], name: "index_family_members_on_family_id"
    t.index ["person_id"], name: "index_family_members_on_person_id"
  end

  create_table "flipper_features", force: :cascade do |t|
    t.string "key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["key"], name: "index_flipper_features_on_key", unique: true
  end

  create_table "flipper_gates", force: :cascade do |t|
    t.string "feature_key", null: false
    t.string "key", null: false
    t.string "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["feature_key", "key", "value"], name: "index_flipper_gates_on_feature_key_and_key_and_value", unique: true
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.bigint "account_id"
    t.date "dob"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_people_on_account_id"
  end

  create_table "plans", force: :cascade do |t|
    t.bigint "account_id"
    t.string "name", null: false
    t.string "description"
    t.string "stripe_id", null: false
    t.decimal "amount", precision: 8, scale: 2, default: "0.0", null: false
    t.integer "interval", default: 1, null: false
    t.integer "interval_type", default: 0, null: false
    t.boolean "trashed", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_plans_on_account_id"
  end

  create_table "program_instances", force: :cascade do |t|
    t.date "date"
    t.bigint "program_id"
    t.bigint "program_timeslot_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.index ["account_id"], name: "index_program_instances_on_account_id"
    t.index ["program_id"], name: "index_program_instances_on_program_id"
    t.index ["program_timeslot_id"], name: "index_program_instances_on_program_timeslot_id"
  end

  create_table "program_reservations", force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "program_instance_id"
    t.boolean "attend", default: false
    t.datetime "cancel_at_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_program_reservations_on_person_id"
    t.index ["program_instance_id"], name: "index_program_reservations_on_program_instance_id"
  end

  create_table "program_timeslots", force: :cascade do |t|
    t.boolean "monday"
    t.boolean "tuesday"
    t.boolean "wednesday"
    t.boolean "thursday"
    t.boolean "friday"
    t.boolean "saturday"
    t.boolean "sunday"
    t.integer "hour"
    t.integer "minute"
    t.string "meridiem"
    t.bigint "program_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.index ["account_id"], name: "index_program_timeslots_on_account_id"
    t.index ["program_id"], name: "index_program_timeslots_on_program_id"
  end

  create_table "programs", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "capacity"
    t.date "start_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.bigint "account_id"
    t.integer "duration"
    t.index ["account_id"], name: "index_programs_on_account_id"
  end

  create_table "team_members", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "account_id"
    t.integer "role", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_team_members_on_account_id"
    t.index ["user_id"], name: "index_team_members_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "phone"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.bigint "person_id"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.index ["account_id"], name: "index_users_on_account_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_08_235531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "features", force: :cascade do |t|
    t.string "name", null: false
    t.string "type", null: false
    t.string "subtype", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listing_features", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "feature_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feature_id"], name: "index_listing_features_on_feature_id"
    t.index ["listing_id"], name: "index_listing_features_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.integer "location_id", null: false
    t.string "currency", default: "USD", null: false
    t.decimal "price", null: false
    t.string "price_units", default: "per night", null: false
    t.string "other_fees"
    t.string "other_fees_type"
    t.integer "max_guests", null: false
    t.integer "num_bedrooms", null: false
    t.integer "num_beds", null: false
    t.integer "num_baths", null: false
    t.string "property_type", null: false
    t.string "type_of_place", null: false
    t.integer "host_id", null: false
    t.boolean "is_posted", null: false
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["location_id"], name: "index_listings_on_location_id"
    t.index ["title"], name: "index_listings_on_title", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.string "addresss", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip_code", null: false
    t.string "country", null: false
    t.decimal "lat", null: false
    t.decimal "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["addresss"], name: "index_locations_on_addresss"
    t.index ["city"], name: "index_locations_on_city"
    t.index ["country"], name: "index_locations_on_country"
    t.index ["state"], name: "index_locations_on_state"
    t.index ["zip_code"], name: "index_locations_on_zip_code"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "listing_id", null: false
    t.integer "num_guests", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.decimal "payment", null: false
    t.string "currency", default: "USD", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reservations_on_listing_id", unique: true
    t.index ["user_id"], name: "index_reservations_on_user_id", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "reviewer_id", null: false
    t.integer "cleanliness", null: false
    t.integer "accuracy", null: false
    t.integer "communication", null: false
    t.integer "location", null: false
    t.integer "check_in", null: false
    t.integer "value", null: false
    t.string "comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reviews_on_listing_id", unique: true
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["location_id"], name: "index_users_on_location_id", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

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

ActiveRecord::Schema.define(version: 2022_10_30_041939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "hikerhike_id"
    t.string "title"
    t.string "text"
  end

  create_table "hikerhikes", force: :cascade do |t|
    t.integer "hike_id"
    t.integer "hiker_id"
    t.string "status"
  end

  create_table "hikers", force: :cascade do |t|
    t.string "hikername"
    t.string "location"
    t.string "password_digest"
    t.boolean "admin"
  end

  create_table "hikes", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "distance"
    t.string "difficulty"
    t.integer "likes"
  end

end

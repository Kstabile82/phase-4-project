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

ActiveRecord::Schema.define(version: 2022_08_20_170622) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "hikerhike_id"
  end

  create_table "hikerhikes", force: :cascade do |t|
    t.bigint "hiker_id", null: false
    t.bigint "hike_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "status"
    t.index ["hike_id"], name: "index_hikerhikes_on_hike_id"
    t.index ["hiker_id"], name: "index_hikerhikes_on_hiker_id"
  end

  create_table "hikers", force: :cascade do |t|
    t.string "hikername"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  create_table "hikes", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "difficulty"
    t.integer "distance"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "likes"
  end

  add_foreign_key "hikerhikes", "hikers"
  add_foreign_key "hikerhikes", "hikes"
end

ActiveRecord::Schema.define(version: 2020_09_11_165919) do

  create_table "hairservices", force: :cascade do |t|
    t.string "service_name"
    t.integer "price"
    t.integer "hairstylist_id"
  end

  create_table "hairstylists", force: :cascade do |t|
    t.string "name"
    t.integer "year_licensed"
  end

end

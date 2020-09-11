class CreateHairservices < ActiveRecord::Migration[6.0]
  def change
    create_table :hairservices do |t|
      t.string :service_name
      t.integer :price
      t.integer :hairstylist_id

      # t.timestamps
    end
  end
end

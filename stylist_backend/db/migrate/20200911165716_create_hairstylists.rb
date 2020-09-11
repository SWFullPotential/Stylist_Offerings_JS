class CreateHairstylists < ActiveRecord::Migration[6.0]
  def change
    create_table :hairstylists do |t|
      t.string :name
      t.integer :year_licensed

      # t.timestamps
    end
  end
end

class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :addresss, null: false, index: true
      t.string :city, null: false, index: true
      t.string :state, null: false, index: true
      t.string :zip_code, null: false, index: true
      t.string :country, null: false, index: true
      t.decimal :lat, null: false
      t.decimal :lng, null: false

      t.timestamps
    end
  end
end

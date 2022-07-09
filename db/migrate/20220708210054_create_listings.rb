class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false, index: {unique: true}
      t.string :description, null: false
      t.integer :location_id, null: false, index: true
      t.string :currency, null: false, default: 'USD'
      t.decimal :price, null: false
      t.string :price_units, null: false, default: 'per night'
      t.string :other_fees
      t.string :other_fees_type
      t.integer :max_guests, null: false
      t.integer :num_bedrooms, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      t.string :property_type, null: false
      t.string :type_of_place, null: false
      t.integer :host_id, null: false, index: true
      t.boolean :is_posted, null: false
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end

class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false, index: {unique: true}
      t.string :description, null: false
      t.string :street_address, null: false, index: true
      t.string :city, null: false, index: true
      t.string :state, null: false, index: true
      t.string :zip_code, null: false, index: true
      t.string :country, null: false, index: true
      t.string :region, null: false, index: true
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :currency, null: false, default: 'USD'
      t.float :price, null: false
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
      t.boolean :is_posted, null: false, default: false

      t.timestamps
    end
  end
end

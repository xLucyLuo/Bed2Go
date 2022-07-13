class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false, index: true
      t.integer :listing_id, null: false, index: true
      t.integer :num_guests, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.float :payment, null: false
      t.string :currency, null: false, default: 'USD'

      t.timestamps
    end
  end
end

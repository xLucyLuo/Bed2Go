class CreateListingFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_features do |t|
      t.integer :listing_id, null: false, index: true
      t.integer :feature_id, null: false, index: true

      t.timestamps
    end
  end
end

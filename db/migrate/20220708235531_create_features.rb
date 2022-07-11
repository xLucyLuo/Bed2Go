class CreateFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :features do |t|
      t.string :name, null: false
      t.string :description
      t.string :category, null: false
      t.string :subcategory, null: false

      t.timestamps
    end
  end
end

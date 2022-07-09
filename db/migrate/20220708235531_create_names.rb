class CreateNames < ActiveRecord::Migration[5.2]
  def change
    create_table :features do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :subtype, null: false

      t.timestamps
    end
  end
end

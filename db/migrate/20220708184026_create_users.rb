class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: {unique: true}
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.integer :location_id, null: false, index: {unique: true}

      t.timestamps
    end
  end
end

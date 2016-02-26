class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :name, null: true
      t.string :location, null: true
      t.date :birthday, null: true
      t.string :gender, null: true
      t.text :bio, null: true
      t.string :avatar_url, null: true

      t.timestamps null: false
    end
  end
end

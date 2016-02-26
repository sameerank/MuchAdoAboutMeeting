class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :banner_url, null: false
      t.integer :organizer_id, null: false

      t.timestamps null: false
    end
  end
end

class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: true
      t.string :location, null: false
      t.integer :host_id, null: false
      t.integer :group_id, null: false

      t.timestamps null: false
    end
  end
end

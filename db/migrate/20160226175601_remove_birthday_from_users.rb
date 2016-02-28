class RemoveBirthdayFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :birthday, :date
  end
end

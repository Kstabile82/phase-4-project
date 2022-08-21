class AddLikesToHikes < ActiveRecord::Migration[6.1]
  def change
    add_column :hikes, :likes, :integer
  end
end

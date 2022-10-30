class Hikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :location
      t.integer :distance
      t.string :difficulty
    end
  end
end

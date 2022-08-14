class CreateHikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikes do |t|
      t.string :name
      t.string :location
      t.string :difficulty
      t.integer :distance
      t.timestamps
    end
  end
end

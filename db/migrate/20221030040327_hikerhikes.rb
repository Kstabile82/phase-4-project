class Hikerhikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikerhikes do |t|
      t.integer :hike_id
      t.integer :hiker_id
      t.string :status
    end
  end
end

class Hikerhikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikerhikes do |t|
      t.belongs_to :hiker, null: false, foreign_key: true
      t.belongs_to :hike, null: false, foreign_key: true
      t.string :status
      t.timestamps
    end
  end
end

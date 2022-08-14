class CreateHikers < ActiveRecord::Migration[6.1]
  def change
    create_table :hikers do |t|
      t.string :hikername

      t.timestamps
    end
  end
end

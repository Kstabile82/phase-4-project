class Comments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :hikerhike_id
      t.string :title
      t.string :text
    end
  end
end

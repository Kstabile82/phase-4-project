class Hikers < ActiveRecord::Migration[6.1]
  def change
    create_table :hikers do |t|
      t.string :name
      t.string :location
      t.string :password_default
    end
  end
end

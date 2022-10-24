class DropInformation < ActiveRecord::Migration[6.1]
  def change
    drop_table :information

  end
end

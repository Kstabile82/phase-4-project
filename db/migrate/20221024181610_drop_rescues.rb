class DropRescues < ActiveRecord::Migration[6.1]
  def change
    drop_table :rescues

  end
end

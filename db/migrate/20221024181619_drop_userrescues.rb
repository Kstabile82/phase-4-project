class DropUserrescues < ActiveRecord::Migration[6.1]
  def change
    drop_table :userrescues

  end
end

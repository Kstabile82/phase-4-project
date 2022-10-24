class DropUserresults < ActiveRecord::Migration[6.1]
  def change
    drop_table :userresults

  end
end

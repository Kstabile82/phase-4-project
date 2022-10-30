class ChangeHikerName < ActiveRecord::Migration[6.1]
  def change
    rename_column :hikers, :name, :hikername

  end
end

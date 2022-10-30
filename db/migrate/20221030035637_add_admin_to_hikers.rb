class AddAdminToHikers < ActiveRecord::Migration[6.1]
  def change
    add_column :hikers, :admin, :boolean
  end
end

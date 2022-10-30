class ChangePassword < ActiveRecord::Migration[6.1]
  def change
    rename_column :hikers, :password_default, :password_digest
  end
end

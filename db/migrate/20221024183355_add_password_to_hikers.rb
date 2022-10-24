class AddPasswordToHikers < ActiveRecord::Migration[6.1]
  def change
      add_column :hikers, :password_digest, :string
  end
end

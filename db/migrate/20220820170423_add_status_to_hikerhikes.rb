class AddStatusToHikerhikes < ActiveRecord::Migration[6.1]
  def change
    add_column :hikerhikes, :status, :string
  end
end

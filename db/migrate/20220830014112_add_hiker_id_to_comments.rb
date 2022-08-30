class AddHikerIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :hiker_id, :integer

  end
end

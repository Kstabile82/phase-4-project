class AddHikerHikeIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :hikerhike_id, :integer 
  end
end

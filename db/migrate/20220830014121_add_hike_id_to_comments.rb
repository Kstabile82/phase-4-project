class AddHikeIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :hike_id, :integer

  end
end

class AddColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :room_id, :integer
  end
end

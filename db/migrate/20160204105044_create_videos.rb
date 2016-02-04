class CreateVideos < ActiveRecord::Migration
  def change
      create_table :videos do |t|
      t.string :title, :null => false
      t.string :link, :null => false
      t.string :category

      t.timestamps(null: false)
    end
  end
end

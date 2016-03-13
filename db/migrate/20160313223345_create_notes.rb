class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :user_id, :null => false
      t.integer :video_id, :null => false
      t.string :body
      t.string :time, :null => false

      t.timestamps(null: false)
    end
  end
end

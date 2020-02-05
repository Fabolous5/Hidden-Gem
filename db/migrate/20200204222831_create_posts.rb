class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :event_name
      t.string :address
      t.string :category
      t.text :event_description
      t.string :start_time
      t.string :end_time
      t.string :date

      t.timestamps
    end
  end
end

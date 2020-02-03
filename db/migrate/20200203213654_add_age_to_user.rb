class AddAgeToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :age, :string
  end
end

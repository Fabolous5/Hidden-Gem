class ReplaceAgeWithDateOfBirth < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :age
    add_column :users, :date_of_birth, :datetime 
  end
end

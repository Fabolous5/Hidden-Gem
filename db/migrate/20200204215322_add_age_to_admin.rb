class AddAgeToAdmin < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :age, :string
  end
end

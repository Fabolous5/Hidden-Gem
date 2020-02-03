class AddPostalCodeToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :postal_code, :string
  end
end

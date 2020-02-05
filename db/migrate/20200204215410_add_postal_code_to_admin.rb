class AddPostalCodeToAdmin < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :postal_code, :string
  end
end

class AddFeaturedToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :featured, :boolean
  end
end

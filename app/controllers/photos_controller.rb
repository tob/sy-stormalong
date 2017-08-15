class PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def show
    photo = Photo.find(params[:id])
    respond_with photo, json: photo
  end

end

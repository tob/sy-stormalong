Rails.application.routes.draw do
  devise_for :users
  root to: 'site#index'

  resources :articles, only: [:index, :show, :create, :destroy, :update]
  resources :photos, only: [:index, :create, :destroy, :update]

end

Rails.application.routes.draw do
  root to: 'site#index'

  resources :articles, only: [:index, :create, :destroy, :update]
  resources :photos, only: [:index, :create, :destroy, :update]

end

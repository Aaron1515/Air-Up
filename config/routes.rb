Rails.application.routes.draw do
  get 'api/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "welcome#index"
  resources :welcome
  resources :api
end

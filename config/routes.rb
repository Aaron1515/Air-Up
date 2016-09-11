Rails.application.routes.draw do
  get 'api/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/list', to: 'api#list'

  get '/', to: 'welcome#index'
  get '/welcome', to: 'welcome#show'

  root to: "welcome#index"
  resources :welcome
  resources :api
end

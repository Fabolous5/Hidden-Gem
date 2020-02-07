Rails.application.routes.draw do
  resources :posts
  devise_for :admins, path: 'admins'
  devise_for :users, path: 'users'
       get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
       root to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/posts' => 'post#index' 
  get '/new' => 'post#new'
  post'/posts' => 'post#create'
  get '/posts/:id' => 'post#show'
  get '/posts/:id/edit' => 'post#edit'
  put '/posts/:id' => 'post#update'
  delete '/posts/:id' => 'post#destroy'







end

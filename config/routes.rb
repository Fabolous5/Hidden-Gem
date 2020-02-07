Rails.application.routes.draw do
  resources :posts
  devise_for :admins, path: 'admins'
  devise_for :users, path: 'users'
       get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
       root to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # routes for users
    # shows all users
    get '/users' => 'users#index'
    # returns an HTML form for creating a new user
    get '/users/new' => 'users#new'
    # creates a new user
    post 'users' => 'users#create'
    # displays a specific user
    get 'users/:id' => 'users#show'
    # returns an html form for editing a user
    get 'users/:id/edit' => 'users#edit'
    # updates a specific usesr
    put 'users/:id' => 'users#update'
    # deletes a specific usser
    delete 'users/:id' => 'users#destroy'
    # routes for posts
    # shows all posts
    get '/posts' => 'posts#index'
    # returns an HTML form for creating a new user
    get '/posts/new' => 'posts#new'
    # creates a new user
    post 'posts' => 'posts#create'
    # displays a specific user
    get 'posts/:id' => 'posts#show'
    # returns an html form for editing a user
    get 'posts/:id/edit' => 'posts#edit'
    # updates a specific usesr
    put 'posts/:id' => 'posts#update'
    # deletes a specific usser
    delete 'posts/:id' => 'posts#destroy'

end

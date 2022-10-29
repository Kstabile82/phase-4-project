Rails.application.routes.draw do
  resources :hikers
  resources :hikes
  resources :hikerhikes
  resources :comments, only: [:create, :index, :destroy]
  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  get "/showallusers", to: "hikers#index"
  delete "/logout", to: "sessions#destroy"
  delete "/deleteme/:id", to: "hikers#destroy"
  get "/hikes", to: "hikes#index"
  get "/myhikes", to: "hikerhikes#show"
  get "/myhikes", to: "hikerhikes#index"
  post "/myhikes", to: "hikerhikes#create"
  patch "/hikerhikes", to: "hikerhikes#update"
  delete "/hikerhikes", to: "hikerhikes#destroy"
  post "/comments", to: "comments#create"
  post "/findcomments", to: "comments#show"
  delete "/comments", to: "comments#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

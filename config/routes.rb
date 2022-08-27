Rails.application.routes.draw do
  resources :hikers, only: [:index, :create, :show, :destroy]
  resources :hikes
  resources :hikerhikes
  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/deleteme", to: "hikers#destroy"
  get "/myhikes", to: "hikerhikes#show"
  post "/myhikes", to: "hikerhikes#create"
  patch "/myhikes", to: "hikerhikes#update"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

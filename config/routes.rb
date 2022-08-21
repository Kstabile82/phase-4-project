Rails.application.routes.draw do
  resources :hikers, only: [:create, :show, :index]
  resources :hikes
  resources :hikerhikes
  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/myhikes", to: "hikerhikes#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

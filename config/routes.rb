Rails.application.routes.draw do
  resources :hikers
  resources :hikes
  resources :hikerhikes, only: [:create, :destroy]
  resources :comments, only: [:create, :index, :show, :destroy]
  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/deleteme/:id", to: "hikers#destroy"
  post "/findcomments", to: "comments#show"
  get "/hikesearchterm", to: "hikes#searchterm"
  get "/search/:searchterm", to: "hikes#spacesearch"
  get "/toplikes/:number", to: "hikes#toplikes"
  get "/distance/:dist", to: "hikes#dist"
  get "/hikerhikes/:userId", to: "hikerhikes#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

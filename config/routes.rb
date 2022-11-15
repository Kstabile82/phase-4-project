Rails.application.routes.draw do
  resources :hikers
  resources :hikes
  resources :hikerhikes, only: [:create, :destroy, :update]
  resources :comments, only: [:create, :index, :destroy]
  post "/signup", to: "hikers#create"
  get "/me", to: "hikers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/deleteme/:id", to: "hikers#destroy"
  post "/findcomments", to: "comments#showcomments"
  # get "/hikesearchterm", to: "hikes#searchterm"
  # get "/search/:searchterm", to: "hikes#spacesearch"
  # get "/toplikes/:number", to: "hikes#toplikes"
  # get "/distance/:dist", to: "hikes#dist"
  # get "/hikerhikes/:hiker_id", to: "hikerhikes#show"
  get "/getmyhikes", to: "hikerhikes#show"
  # get "/rankings", to: "hikes#rankings"
  # get "/myhikes/:id", to: "hikes#myhikes"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

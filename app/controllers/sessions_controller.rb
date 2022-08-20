class SessionsController < ApplicationController
    def login
       hiker = Hiker.find_by(hikername: params[:hiker][:hikername])
       if hiker.authenticate(params[:hikername][:password])
        render json: {message: "successful login", hiker: hiker}, status: 200
       else 
        render json: {error: "Invalid username and password, try again."}, status: :unprocessable_entity
    end

end

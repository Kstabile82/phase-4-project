class SessionsController < ApplicationController
    # def login
    #    hiker = Hiker.find_by(hikername: params[:hiker][:hikername])
    #    if hiker.authenticate(params[:hikername][:password])
    #     render json: {message: "successful login", hiker: hiker}, status: 200
    #    else 
    #     render json: {error: "Invalid username and password, try again."}, status: :unprocessable_entity
    # end
    
    def login
        hiker = Hiker.find_by(hikername: params[:hikername])
        session[:hiker_id] = hiker.id
        render json: hiker
    end

    def destroy
        session.delete :hiker_id
        head :no_content
      end
end

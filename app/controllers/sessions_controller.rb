class SessionsController < ApplicationController
    
    def create
       hiker = Hiker.find_by(hikername: params[:hikername])
        # hiker = Hiker.find_by(hikername: params[:hiker][:hikername])
        # if hiker.authenticate(params[:hiker][:password])
        if hiker&.authenticate(params[:password])
           session[:hiker_id] = hiker.id
           render json: hiker
        # render json: {message: "successful login", hiker: hiker}, status:200
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
     end

    def destroy
        session.delete :hiker_id
        head :no_content
      end

end

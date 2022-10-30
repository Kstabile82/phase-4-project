class SessionsController < ApplicationController
    
    def create
       hiker = Hiker.find_by(hikername: params[:hikername])
        if hiker&.authenticate(params[:password])
           session[:hiker_id] = hiker.id
           render json: hiker
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
     end

    def destroy
        session.delete :hiker_id
        head :no_content
      end

end

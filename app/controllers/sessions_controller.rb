class SessionsController < ApplicationController

#     def login
#        hiker = Hiker.find_by(hikername: params[:hiker][:hikername])
#        if hiker.authenticate(params[:hikername][:password])
#         render json: {message: "successful login", hiker: hiker}, status: 200
#        else 
#         render json: {error: "Invalid username and password, try again."}, status: :unprocessable_entity
#     end
#   end
    
    def create
        hiker = Hiker.find_by(hikername: params[:hikername])
        session[:hiker_id] = hiker.id
        render json: hiker
    end

    # def create
    #     hiker = Hiker.find_by(hikername: params[:hikername])
    #     if hiker&.authenticate(params[:password])
    #       session[:hiker_id] = hiker.id
    #       render json: hiker, status: :created
    #     else
    #       render json: { error: "Invalid username or password" }, status: :unauthorized
    #     end
    # end

    def destroy
        session.delete :hiker_id
        head :no_content
      end

end

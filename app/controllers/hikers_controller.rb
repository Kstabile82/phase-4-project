class HikersController < ApplicationController
   before_action :authorize, only: [:create, :show]

    def index
        render json: Hiker.all, status: 200
    end

    def create
        hiker = Hiker.create!(hiker_params)
        session[:hiker_id] = hiker.id
        render json: hiker, status: 200 
    end

    # def show
    #     render json: @current_user
    # end

    def show
        hiker = Hiker.find_by(id: session[:hiker_id])
        if hiker 
            render json: hiker
        else
            render json: {message: "Not logged in"}, status: :unauthorized
        end
    end

    def destroy
        hiker = find_hiker
        hiker.destroy
        head :no_content
    end

    private 
    def find_hiker
        Hiker.find(params[:id])
    end
    
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :hiker_id
    end

    def hiker_params
        params.permit(:hikername, :password, :password_confirmation)
    end
end

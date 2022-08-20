class HikersController < ApplicationController
    def index
        render json: Hiker.all, status: 200
    end
    def create
        hiker = Hiker.create!(hiker_params)
        render json: hiker, status: 200 
    end
    # def show
    #     # hiker = Hiker.find_by(id: session[:hiker_id])
    #     hiker = Hiker.find_by(hikername: [:hikername])
    #     if hiker 
    #         render json: hiker
    #     else
    #         render json: {message: "Not logged in"}, status: :unauthorized
    #     end
    # end


    private 

    def hiker_params
        params.permit(:hikername, :password, :password_confirmation)
    end
end

class HikersController < ApplicationController
    def index
        render json: Hiker.all, status: 200
    end
    def create
        hiker = Hiker.create!(hiker_params)
        render json: hiker, status: 200 
    end
    # def show
    #     render json: Hiker.find_by(username = )
    # end


    private 

    def hiker_params
        params.permit(:hikername, :password, :password_confirmation)
    end
end

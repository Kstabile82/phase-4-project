class HikerhikesController < ApplicationController
    def create
        hikerHike = Hikerhike.create!(hikerhike_params)
        render json: hikerHike, status: 200 
    end

    def show
        hikerHike = Hikerhike.select(hiker_id: params[:hiker_id])
        if hikerHike 
            render json: hikerHike
        else
            render json: {message: "No Hikes"}, status: :unauthorized
        end
    end

    def destroy
        # hikerHike = Hikerhike.find_by(params[:hiker_id, :hike_id])
        hikerHike = Hikerhike.find_by(id: params[:id])
        hikerHike.destroy
        head :no_content
    end

    def update
        hikerHike = Hikerhike.find_by(id: params[:id])
        hikerHike.update(hikerhike_params)
        render json: hikerHike
    end
  
    
    private 

    def hikerhike_params
        params.permit(:id, :hiker_id, :hike_id, :status)

    end
end

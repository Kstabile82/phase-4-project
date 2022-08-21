class HikerhikesController < ApplicationController
    def create
        hikerHike = HikerHike.create!(hikerhike_params)
        render json: hikerHike, status: 200 
    end
    def show
        hikerHike = find(params[:hiker_id])
        render json: hikerHike, status: 200 
    end
    def destroy
        hikerHike = find(params[:hiker_id, :hike_id])
        hikerHike.destroy
        head :no_content
    end
    def update
        hikerHike = HikerHike.find(params[:id])
        hikerHike.update(hikerHike_params)
        render json: hikerHike
      end
    
    private 

    def hikerHike_params
        params.permit(:hiker_id, :hike_id)
    end
end

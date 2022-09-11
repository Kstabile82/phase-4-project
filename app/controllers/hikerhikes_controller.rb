class HikerhikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        hikerHike = Hikerhike.create!(hikerhike_params)
        render json: hikerHike, status: 200 
    end

    def index
        hikerHike = Hikerhike.all
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
        hikerHike = Hikerhike.find(params[:id])
        hikerHike.destroy
        head :no_content
        # render json: {}
    end

    def update
        hikerHike = Hikerhike.find(params[:id])
        hikerHike.update!(hikerhike_params)
        render json: hikerHike
    end
  
    
    private 

    def hikerhike_params
        params.permit(:id, :hiker_id, :hike_id, :status)

    end
    def render_not_found_response
        render json: { error: "ID not found" }, status: :not_found
      end
end

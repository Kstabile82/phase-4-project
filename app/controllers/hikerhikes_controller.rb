class HikerhikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        hikerHike = Hikerhike.create!(hikerhike_params)
        # render json: hikerHike, status: 200 
        render json: hikerHike, status:200
    end

    def index
        hikerHike = Hikerhike.all
        render json: hikerHike, serializer: HikerhikeSerializer
    end

    def show
        hikerHike = Hikerhike.select(hiker_id: params[:hiker_id])
        if hikerHike 
            render json: hikerHike, serializer: HikerhikeSerializer
        else
            render json: {message: "No Hikes"}, status: :unauthorized
        end
    end

    def destroy
        hikerHike = Hikerhike.find(params[:id])
        hikerHike.destroy
        head :no_content
    end

    def update
        hikerHike = Hikerhike.find(params[:id])
        hikerHike.update!(hikerhike_params)
        render json: hikerHike, serializer: HikerhikeSerializer

    end
  
    private 

    def hikerhike_params
        params.permit(:id, :hiker_id, :hike_id, :status, :hikemethod)

    end
    def render_not_found_response
        render json: { error: "Hiker ID or Hike ID not found" }, status: :not_found
      end
end

class HikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
# skip_before_action :authorize
   
def index
        hikes = Hike.all
        render json: hikes
    end

    def show
        hike = Hike.find(params[:id])
        render json: hike
      end

      def create
        hike = Hike.create!(hike_params)
        render json: hike, status: 200 
    end
    
      private
    
      def render_not_found_response
        render json: { error: "Hike not found" }, status: :not_found
      end

      def hike_params
        params.permit(:name, :location, :difficulty, :distance, :likes)
      end
end

class HikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
        hikes = Hike.all
        render json: hikes
    end

    def show
        hike = Hike.find(params[:id])
        render json: hike
      end
    
      private
    
      def render_not_found_response
        render json: { error: "Hike not found" }, status: :not_found
      end
end

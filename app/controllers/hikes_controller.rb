class HikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
before_action :authorize
# before_action :authAddLike
before_action :authAdmin, only: :delete
# skip_before_action :authAdmin, only: [:create, :index, :show, :update]
skip_before_action :authorize, only: [:show, :index]
# skip_before_action :authAddLike, only: [:show, :index]
   
   def index
        hikes = Hike.all
        render json: hikes, include: [:comments]
    end

    def show
        hike = Hike.find(params[:id])
        render json: hike
      end

      def create
        hike = Hike.create!(hike_params)
        render json: hike, status: 200 
    end
    
    def update
      hike = Hike.find_by(id: params[:id])
      hike.update!(hike_params)
      render json: hike
    end

    def destroy
      hike = Hike.find(params[:id])
      hike.destroy
   end

      private

      def hike_params
        params.permit(:name, :location, :difficulty, :distance, :likes)
      end


end

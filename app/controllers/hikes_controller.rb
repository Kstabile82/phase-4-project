class HikesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
before_action :authorize, only: [:create, :delete, :update]
before_action :authAdmin, only: :delete
wrap_parameters format: [] 

   def index
        hikes = Hike.all
        render json: hikes, include: [:comments]
    end

    def show
        hike = Hike.find(params[:id])
        render json: hike
      end

     def spacesearch
        results =  Hike.select { |h| h.name.downcase.include?(params[:searchterm].downcase) } 
        render json: results
    end
    
    def toplikes
      mostliked = Hike.order('likes').reverse
      topamount = mostliked.slice(0, params[:number].to_i)
      render json: topamount
    end

    def rankings
      finalrankings = Hike.all.sort_by{|i| i.rank.to_i}
      render json: finalrankings
      # finalrankings = Hike.all.map do |hk|
      #   {hk: hk, rank: hk[:distance]}
      # end
      # render json: finalrankings.sort_by{|i| i[:rank]}
    end

    def dist 
      hikedist = Hike.where("distance >= ?", params[:dist].to_i)
      render json: hikedist
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
        params.permit(:id, :name, :location, :difficulty, :distance, :likes)
      end

  end

class HikesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
before_action :authorize
before_action :authAdmin, only: :delete
skip_before_action :authorize, only: [:show, :index]
   
   def index
        hikes = Hike.all
        render json: hikes, include: [:comments]
    end

    def show
        hike = Hike.find(params[:id])
        render json: hike
      end

    def spacesearch
      results =  Hike.select { |h| h.name.include?(params[:searchterm]) } 
      render json: results
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

   def searchterm
    byebug

    term
    hikerhikes = []
    hikeids = []
    hikes = []
    Comment.each do |c|
      if c.text.includes(term)
        hikerhikes << c.hikerhike_id 
      end
    end
      hikerhikes.each do |hh| 
        hikeids << hh.hike_id
      end 
      hikeids.each do |h| 
        hikes << Hike.find(h)
      end
      render json: hikes
   end

  #  Create a GET custom route that includes a search term 
  # create route with hikes/:fun to hikes#searchterm

  # (one word, no spaces, case insensitive).
  #in searchterm method, define the search term 

   #search all comments for comment.text includes search term 
   #for each comment find the hike that it relates to

  # This should return all the hikes that have a comment that 
  # include the word in their text field.

      private

      def hike_params
        params.permit(:name, :location, :difficulty, :distance, :likes)
      end


end

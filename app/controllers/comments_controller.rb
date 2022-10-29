class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
before_action :authorize_comment 
skip before_action :authorize_comment, only: :show

    def show
        hh = Hikerhike.where(hike_id: params[:hike_id])
        comments = []
        hh.each do |h| 
         comm = Comment.find_by(hikerhike_id: h.id)
         if comm
          comments << comm
         end
        end
        render json: comments
      end

      def create
       comment = Comment.create!(comment_params)
        render json: comment, status: 200 
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        head :no_content
    end

      private
    
      def render_not_found_response
        render json: { error: "Comments not found" }, status: :not_found
      end

      def comment_params
        params.permit(:text, :hikerhike_id)
      end

      def authorize_comment
        @current_hiker = Hiker.find_by(id: session[:hiker_id]) 
        hikerhk = Hikerhike.find_by(id: params[:id]) 
        if @current_hiker.hikerhikes.include(hikerhk)    
          ok
        else 
          unauthorized
        end
    end
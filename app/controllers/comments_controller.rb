class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
# skip before_action :set_comment, only: [:create, :destroy]

  #  def index
  #       comments = Comment.all
  #       render json: comments
  #   end

    def show
        comments = Comment.find(params[:id])
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
    end
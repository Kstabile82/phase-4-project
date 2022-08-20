class CommentsController < ApplicationController
before_action :set_comment, only: [:show, :update, :destroy]

def index
    @comments = Comment.all
    render json: @comments
end

def show 
    render json: @comment
end
end


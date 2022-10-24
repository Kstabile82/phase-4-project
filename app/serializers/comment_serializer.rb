class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text

def index
  comments = Comment.select(hikerhike_id: params[:hikerhike_id])
  if comments 
      render json: comments
  else
      render json: {message: "No Comments"}, status: :unauthorized
  end
end

  # def hikermethod
  #   self.object.hiker
  # end

  # def hikemethod
  #   self.object.hikerhike.
  # end
end

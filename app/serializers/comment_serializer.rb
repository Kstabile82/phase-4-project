class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :hikemethod, :hikermethod
  belongs_to :hike
  belongs_to :hiker

def index
  comments = Comment.select(hike_id: params[:hike_id])
  if comments 
      render json: hikerHike
  else
      render json: {message: "No Comments"}, status: :unauthorized
  end
end

  def hikermethod
    self.object.hiker
  end

  def hikemethod
    self.object.hike
  end
end

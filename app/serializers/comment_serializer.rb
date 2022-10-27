class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :author

def index
  comments = Comment.select(hikerhike_id: params[:hikerhike_id])
  if comments 
      render json: comments
  else
      render json: {message: "No Comments"}, status: :unauthorized
  end
end

def author 
  hh = self.object.hikerhike
  authr = Hiker.find(hh[:hiker_id])
end 
  # def hikermethod
  #  let hh = self.object.hikerhike
  #  Hiker.find(hh.hiker_id)
  # end

  # def hikemethod
  #   self.object.hikerhike.
  # end
end

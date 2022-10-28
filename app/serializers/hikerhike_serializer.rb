class HikerhikeSerializer < ActiveModel::Serializer
  attributes :id, :hike_id, :hiker_id, :status, :comments
has_many :comments, serializer: CommentSerializer
  def hikermethod
    self.object.hiker
  end

  def hikemethod
    self.object.hike
  end

  def commentmethod
    self.object.comments
  end
end

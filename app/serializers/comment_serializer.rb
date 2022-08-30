class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :hikermethod, :hikemethod
  belongs_to :hiker
  belongs_to :hike

  def hikermethod
    self.object.hiker
  end

  def hikemethod
    self.object.hike
  end
end

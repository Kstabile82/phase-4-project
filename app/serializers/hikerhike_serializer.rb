class HikerhikeSerializer < ActiveModel::Serializer
  attributes :id, :hikermethod, :hikemethod
  belongs_to :hiker
  belongs_to :hike

  def hikermethod
    self.object.hiker
  end

  def hikemethod
    self.object.hike
  end
end

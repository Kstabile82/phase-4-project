class HikerhikeSerializer < ActiveModel::Serializer
  attributes :id, :hike_id, :hiker_id, :status, :hikermethod, :commentmethod
  belongs_to :hiker
  belongs_to :hike
  has_many :comments

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

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text
  belongs_to :hiker
  belongs_to :hike
end

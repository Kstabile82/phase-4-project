class HikeSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :difficulty, :distance, :likes, :comments
  has_many :comments, serializer: CommentSerializer
end

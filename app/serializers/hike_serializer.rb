class HikeSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :difficulty, :distance, :likes
  has_many :hikerhikes, serializer: HikerhikeSerializer
  has_many :comments, serializer: CommentSerializer

end

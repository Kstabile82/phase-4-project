class HikeSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :difficulty, :distance, :likes
  has_many :hikerhikes
  has_many :comments

end

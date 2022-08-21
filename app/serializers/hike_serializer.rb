class HikeSerializer < ActiveModel::Serializer
  attributes :name, :location, :difficulty, :distance, :likes
  has_many :hikerhikes
end

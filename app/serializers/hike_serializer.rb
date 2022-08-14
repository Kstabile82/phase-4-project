class HikeSerializer < ActiveModel::Serializer
  attributes :name, :location, :difficulty, :distance
  has_many :hikerhikes
end

class HikerSerializer < ActiveModel::Serializer
  attributes :id, :hikername
  has_many :hikerhikes
  has_many :comments


end

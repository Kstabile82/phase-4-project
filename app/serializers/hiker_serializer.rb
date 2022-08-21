class HikerSerializer < ActiveModel::Serializer
  attributes :id, :hikername
  has_many :hikerhikes

end

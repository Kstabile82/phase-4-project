class HikerSerializer < ActiveModel::Serializer
  attributes :id, :hikername, :password_digest
  has_many :hikerhikes
  has_many :hikes


end

class HikerSerializer < ActiveModel::Serializer
  # attributes :id, :hikername, :password_digest, :hikerhikes, :admin
  attributes :id, :hikername, :admin
  # has_many :hikerhikes, serializer: HikerhikeSerializer
  # has_many :hikes, serializer: HikeSerializer

  # has_many :comments, serializer: CommentSerializer
  # has_many :hikes

    # def hikemethod
    #  hikerhk = self.object.hikes
    # end
end

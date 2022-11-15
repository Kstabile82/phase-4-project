class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :author
  # belongs_to :hikerhike

def author 
  hh = self.object.hikerhike
  authr = Hiker.find(hh[:hiker_id])
end 


end

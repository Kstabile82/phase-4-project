class Comment < ApplicationRecord
    validates :text, presence: true, length: { maximum: 50 }  
    validates :hikerhike_id, presence: true
    belongs_to :hikerhike
end

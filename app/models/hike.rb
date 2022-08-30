class Hike < ApplicationRecord
    has_many :hikerhikes
    has_many :comments
    has_many :hikers, through: :hikerhikes 
    has_many :hikers, through: :comments 

end

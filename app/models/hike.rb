class Hike < ApplicationRecord
    has_many :hikerhikes, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :hikers, through: :hikerhikes 
    has_many :hikers, through: :comments 

end

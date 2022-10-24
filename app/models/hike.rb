class Hike < ApplicationRecord
    has_many :hikerhikes, dependent: :destroy
    has_many :hikers, through: :hikerhikes 
    has_many :comments, through: :hikerhikes

end

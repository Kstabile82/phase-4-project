class Hike < ApplicationRecord
    has_many :hikerhikes
    has_many :hikers, through: :hikerhikes 
    has_many :comments, through: :hikerhikes
end

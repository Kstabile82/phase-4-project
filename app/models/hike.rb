class Hike < ApplicationRecord
    validates :name, presence: true
    validates :location, presence: true
    validates :distance, presence: true
    validates :difficulty, presence: true
    has_many :hikerhikes, dependent: :destroy
    has_many :hikers, through: :hikerhikes 
    has_many :comments, through: :hikerhikes

    
    def rank
        r = distance * 3
       "#{r}"
    end
end

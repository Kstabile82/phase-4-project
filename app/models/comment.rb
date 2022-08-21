class Comment < ApplicationRecord
    belongs_to :hike
    belongs_to :hiker
end

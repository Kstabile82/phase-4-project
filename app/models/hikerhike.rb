class Hikerhike < ApplicationRecord
  belongs_to :hiker
  belongs_to :hike
  has_many :comments, dependent: :destroy
end

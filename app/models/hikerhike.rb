class Hikerhike < ApplicationRecord
  validates :status, presence: true
  validates :hike_id, presence: true
  validates :hiker_id, presence: true
  belongs_to :hiker
  belongs_to :hike
  has_many :comments, dependent: :destroy
end

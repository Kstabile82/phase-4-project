class Hiker < ApplicationRecord
    has_secure_password
    validates :hikername, presence: true, uniqueness: true
    has_many :hikerhikes, dependent: :destroy
    has_many :hikes, through: :hikerhikes
    has_many :comments, through: :hikerhikes

    # user.password = 'mUc3m00RsqyRe'
    # user.password_confirmation = 'mUc3m00RsqyRe'
    # user.authenticate('notright')
end

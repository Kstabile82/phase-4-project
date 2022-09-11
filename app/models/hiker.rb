class Hiker < ApplicationRecord
    has_secure_password
    has_many :hikerhikes, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :hikes, through: :comments
    has_many :hikes, through: :hikerhikes

    # user.password = 'mUc3m00RsqyRe'
    # user.password_confirmation = 'mUc3m00RsqyRe'
    # user.authenticate('notright')
end

class Hiker < ApplicationRecord
    # has_secure_password
    has_many :hikerhikes 
    has_many :hikes, through: :hikerhikes

    # user.password = 'mUc3m00RsqyRe'
    # user.password_confirmation = 'mUc3m00RsqyRe'
    # user.authenticate('notright')
end

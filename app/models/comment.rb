class Comment < ApplicationRecord
    belongs_to :hikerhike
    # validates text, presence: true, limit: [50]
end

class Hairservice < ApplicationRecord
    belongs_to :hairstylist
    validates :serviceName, presence: true 
    validates :price, presence: true
end

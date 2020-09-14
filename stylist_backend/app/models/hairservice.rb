class Hairservice < ApplicationRecord
    belongs_to :hairstylist
    validates :service_name, presence: true 
    validates :price, presence: true
end

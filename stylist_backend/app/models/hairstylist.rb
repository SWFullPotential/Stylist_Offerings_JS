class Hairstylist < ApplicationRecord
    has_many :hairservices
    validates :name, presence: true 
    validates :year_licensed, presence: true
end

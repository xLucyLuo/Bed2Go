class Feature < ApplicationRecord
    validates :name, :category, :subcategory,
        presence: true

    has_many :listing_features
    
    has_many :listings,
      through: :listing_features
end

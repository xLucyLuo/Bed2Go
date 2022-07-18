class Listing < ApplicationRecord
    validates :title,
      presence: true,
      uniqueness: true

    validates :description, :street_address, :city, :state, :zip_code, :country, :region, :lat, :lng, :currency, :price, :price_units, :max_guests, :num_bedrooms, :num_beds, :num_baths, :property_type, :type_of_place, :host_id, :is_posted,
      presence: true

    before_validation :defaults, :on => :create

    def defaults
      self.currency ||= "USD"
      self.price_units ||= "per night"
      self.is_posted ||= false
    end

    # AWS S3
    has_one_attached :photo, dependent: :destroy

    has_many :reviews, dependent: :destroy

    has_many :listing_features, dependent: :destroy

    belongs_to :host,
      foreign_key: :host_id,
      class_name: :User

    has_many :features,
      through: :listing_features


    #potentially refactor for wishlist
    # has_many :favorites
    # has_many :favorite_users,
    #   through: :favorites,
    #   source: :user
  
    def self.in_bounds(bounds)
      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end
  
    def average_rating
      ((reviews.average(:cleanliness) + 
        reviews.average(:accuracy) + 
        reviews.average(:communication) +
        reviews.average(:location) +
        reviews.average(:check_in) +
        reviews.average(:value))/6).round(2).to_f
    end

    def num_reviews
      reviews.count
    end

    # def host_name
    #   host.fname
    # end

end

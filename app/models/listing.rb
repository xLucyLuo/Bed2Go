class Listing < ApplicationRecord
    validates :title,
      presence: true,
      uniqueness: true

    validates :description, :street_address, :city, :state, :zip_code, :country, :region, :lat, :lng, :price, :max_guests, :num_bedrooms, :num_beds, :num_baths, :property_type, :type_of_place, :host_id,
      presence: true

    before_validation :defaults, :on => :create

    def defaults
      self.currency ||= "USD"
      self.price_units ||= "per night"
      self.is_posted ||= false
      self.additional_guest_charge ||= 0
    end

    # AWS S3
    has_many_attached :photos, dependent: :destroy

    has_many :reviews, dependent: :destroy

    has_many :listing_features, dependent: :destroy

    belongs_to :host,
      foreign_key: :host_id,
      class_name: :User

    has_many :features,
      through: :listing_features

    #need logic for ensuring no reservation before deleting or maintain basic copy of info on the reservation
    has_many :reservations

    has_many :users, 
      through: :reservations,
      source: :user


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

      return 0 if num_reviews < 1

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

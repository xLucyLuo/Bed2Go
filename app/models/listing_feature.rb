class ListingFeature < ApplicationRecord

    validates :listing_id, :feature_id,
        presence: true

    # can add uniqueness between listing_id and feature_id in validations and database migrations

    belongs_to :feature

    belongs_to :listing

end

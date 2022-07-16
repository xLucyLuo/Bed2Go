json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      # json.reviewIds []
      json.host_name listing.host.fname
    end
  end
end

@listings.each do |listing|
  json.reviews do
    listing.reviews.includes(:reviewer).each do |review|
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
            json.reviewer_name review.reviewer.fname
        end
    end
  end
end


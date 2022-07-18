json.listings do
  @listings.each do |listing|
    host = listing.host
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      # json.reviewIds []
      json.host_name host.fname
      json.host_img_url url_for(host.photo)
      json.img_url url_for(listing.photo)
      json.features do 
        listing.features.each do | feature| 
          # json.extract! feature, :name\
          json.set! feature.id do 
            json.extract! feature, :name, :subcategory
          end
        end
      end
    end
  end
end


@listings.each do |listing|
  json.reviews do
    listing.reviews.includes(:reviewer).each do |review|
        reviewer = review.reviewer

        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
            json.reviewer_name reviewer.fname

            json.reviewer_img_url url_for(reviewer.photo)
        end
    end
  end
end


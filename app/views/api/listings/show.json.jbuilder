json.listings do
    json.set! @listing.id do
        json.partial! 'listing', listing: @listing
        # json.reviewIds []
        host = @listing.host
        json.host_name host.fname
        json.host_img_url url_for(host.photo)
        json.img_urls @listing.photos.map { |photo| url_for(photo) }
    end
end


json.reviews do
    @listing.reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
            json.reviewer_name review.reviewer.fname
            json.reviewer_img_url url_for(reviwer.photo)
        end
    end
end
  
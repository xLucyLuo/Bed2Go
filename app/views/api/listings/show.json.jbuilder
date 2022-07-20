json.listings do
    json.set! @listing.id do
        json.partial! 'listing', listing: @listing
        # json.reviewIds []
        json.host_name @listing.host.fname
        json.host_img_url url_for(@listing.host.photo)
        json.img_url url_for(@listing.photo)
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
  
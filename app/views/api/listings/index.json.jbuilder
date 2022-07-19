json.listings do
  @listings.each do |listing|
    host = listing.host
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      # json.reviewIds []
      json.host_name host.fname
      ## AWS S3
      # json.host_img_url url_for(host.photo)
      # json.img_url url_for(listing.photo)

      ##for when uploading multuple photos (example only)
      # app/views/api/post/show.json.jbuilder
      #json.photoUrls @post.photos.map { |file| url_for(file) }


      json.host_img_url "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
      json.img_url "https://a0.muscache.com/im/pictures/77ce1a57-8313-4d57-9995-25ebd367eeb7.jpg?im_w=960"
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
          
          ## AWS S3
          # json.reviewer_img_url url_for(reviewer.photo)
          json.reviewer_img_url "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        end
    end
  end
end


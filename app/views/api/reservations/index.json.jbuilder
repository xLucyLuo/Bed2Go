json.reservations do
    @reservations.each do |reservation|
      json.set! reservation.id do
        json.partial! 'reservation', reservation: reservation
      end
    end
end

@reservations.each do |reservation|
    listing = reservation.listing
    host = reservation.host

    json.listings do
        json.set! listing.id do
            json.partial! '/api/listings/listing', listing: listing
            json.host_name host.fname
            ## AWS S3
            # json.host_img_url url_for(host.photo)
            # json.img_url url_for(listing.photo)

            json.host_img_url "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            json.img_url "https://a0.muscache.com/im/pictures/77ce1a57-8313-4d57-9995-25ebd367eeb7.jpg?im_w=960"
        end
    end
end
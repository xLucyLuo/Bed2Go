require 'open-uri'

User.destroy_all
Listing.destroy_all
Feature.destroy_all
ListingFeature.destroy_all
Reservation.destroy_all
Review.destroy_all

demo = User.create!(
    email: "demo.user@mybnb.com", 
    password: "123123", 
    fname: "Demo",
    lname: "User"
)

lucy = User.create!(
    email: "lucy.luo@mybnb.com", 
    password: "123123", 
    fname: "Lucy",
    lname: "Luo"
)

cindy = User.create!(
    email: "cindy.vuong@mybnb.com", 
    password: "123123", 
    fname: "Cindy",
    lname: "Vuong"
)

wendy = User.create!(
    email: "wendy.shi@mybnb.com", 
    password: "123123", 
    fname: "Wendy",
    lname: "Shi"
)

evie = User.create!(
    email: "evie.zeng@mybnb.com", 
    password: "123123", 
    fname: "Evie",
    lname: "Seng"
)

alex = User.create!(
    email: "alex.kern@mybnb.com", 
    password: "123123", 
    fname: "Alex",
    lname: "Kern"
)

adam = User.create!(
    email: "adam.lin@mybnb.com", 
    password: "123123", 
    fname: "Adam",
    lname: "Lin"
)

anthonie = User.create!(
    email: "anthonie.lorsithong@mybnb.com", 
    password: "123123", 
    fname: "Anthonie",
    lname: "Lorsithong"
)

danny = User.create!(
    email: "danny.wallace@mybnb.com", 
    password: "123123", 
    fname: "Danny",
    lname: "Wallace"
)

abby = User.create!(
    email: "abigail.hernandez@mybnb.com", 
    password: "123123", 
    fname: "Abigail",
    lname: "Hernandez"
)

chris = User.create!(
    email: "chris.cheasty@mybnb.com", 
    password: "123123", 
    fname: "Chris",
    lname: "Cheasty"
)


mike = User.create!(
    email: "mike.madsen@mybnb.com", 
    password: "123123", 
    fname: "Mike",
    lname: "Madsen"
)


paulo = User.create!(
    email: "paulo.bocanegra@mybnb.com", 
    password: "123123", 
    fname: "Paulo",
    lname: "Bocanegra"
)

# Listing 1
l1 = Listing.create!(
    title: "Beautiful and Spacious Loft - SOMA",
    description: "Beautiful and very Spacious Loft on a clean and protected cul-de-sac. Close to Convention Center and Downtown as well as vibrant nightlife and many excellent restaurants. Two separate living areas to enjoy. Large Balcony overlooks luscious urban garden. Residential street parking permit available upon prior request",
    type_of_place: "Entire place",
    property_type: "Appartment",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    street_address: "174A Langton St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94103",
    country: "United States",
    region: "North America",
    lat: 37.775340,
    lng: -122.407417,
    currency: "USD" ,
    price: 187.00,
    price_units: "per night" ,
    additional_guest_charge: 96,
    other_fees: "71;89",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: lucy.id,
    is_posted: true
)

# Listing 2
l2 = Listing.create!(
    title: "Gorgeous Home with Large Golden Gate Bridge Views!",
    description: "Enjoy living in this airy and spacious Mediterranean- style home. Marble counters, custom cabinetry, and hardwood flooring make this home very appealing. Outside, you’ll find a garden and panoramic views of the whole Golden Gate Bridge through our large crystal-clear windows.",
    type_of_place: "Entire place",
    property_type: "House",
    max_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 1,
    street_address: "43 Emerson St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94118",
    country: "United States",
    region: "North America",
    lat: 37.783160,
    lng: -122.448510,
    currency: "USD" ,
    price: 212.00,
    price_units: "per night" ,
    additional_guest_charge: 115,
    other_fees: "55;76",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: wendy.id,
    is_posted: true
)

# Listing 3
l11= Listing.create!(
    title: "Quiet Oasis Near Central Park",
    description: "Style. Simplicity. Serenity. Welcome to our oasis in the heart of Manhattan, steps from 57th and Park. Carefully curated with world-class designer furniture, we’ve spared no expense in providing you with luxury surroundings while making you feel comfortable and at home. If you crave the authentic, personalized experience of staying in an Airbnb PLUS all the comforts and safety of a hotel, then look no more.",
    type_of_place: "Entire place",
    property_type: "Appartment",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    street_address: "65 E 55th St",
    city: "New York",
    state: "NY",
    zip_code: "10022",
    country: "United States",
    region: "North America",
    lat: 40.760891,
    lng: -73.972130,
    currency: "USD" ,
    price: 278.00,
    price_units: "per night" ,
    additional_guest_charge: 102,
    other_fees: "62;86",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: cindy.id,
    is_posted: true
)

# Review 1
r1 = Review.create!(
    listing_id: l1.id,
    reviewer_id: lucy.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 4,
    location: 5,
    check_in: 5,
    value: 3,
    comment: "Perfect stay! Highly recommend!"
)

# Review 2
r2 = Review.create!(
    listing_id: l1.id,
    reviewer_id: wendy.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 4,
    check_in: 5,
    value: 5,
    comment: "Fantastic host and great location! The place was beautiful, spacious and clean."
)

# Review 3
r3 = Review.create!(
    listing_id: l1.id,
    reviewer_id: evie.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Very nice place. It is close to downtown. Quiet and Convenient."
)

# Review 4
r4 = Review.create!(
    listing_id: l2.id,
    reviewer_id: cindy.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "Had an awesome week in SF! The place was even better than in the picture. Thanks!"
)

rs1 = Reservation.create!(
    user_id: demo.id,
    listing_id: l2.id,
    num_guests: 2,
    start_date: DateTime.new(2022,9,14),
    end_date: DateTime.new(2022,9,16),
    payment: 1580.04
)

bathtub = Feature.create!(
    name: "Bathtub",
    category: "Amenities",
    subcategory: "Bathroom",
)

hair_dryer = Feature.create!(
    name: "Hair dryer",
    category: "Amenities",
    subcategory: "Bathroom",
)

shampoo = Feature.create!(
    name: "Shampoo",
    category: "Amenities",
    subcategory: "Bathroom",
)

washer = Feature.create!(
    name: "Washer",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

essentials = Feature.create!(
    name: "Essentials",
    description: "Towels, bedsheets, soap, and toilet paper",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

tv = Feature.create!(
    name: "TV",
    category: "Amenities",
    subcategory: "Entertainment",
)

heating = Feature.create!(
    name: "Heating",
    category: "Amenities",
    subcategory: "Heating and Cooling",
)

air_conditioning = Feature.create!(
    name: "Air conditioning",
    category: "Amenities",
    subcategory: "Heating and Cooling"
)

smoke_alarm = Feature.create!(
    name: "Smoke alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)

co_alarm = Feature.create!(
    name: "Carbon monoxide alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)


wifi = Feature.create!(
    name: "Wifi",
    category: "Amenities",
    subcategory: "Internet and Office"
)

workspace = Feature.create!(
    name: "Dedicated workspace",
    category: "Amenities",
    subcategory: "Internet and Office"
)

kitchen = Feature.create!(
    name: "Kitchen",
    description: "Space where guests can cook their own meals",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

fridge = Feature.create!(
    name: "Refrigerator",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

microwave = Feature.create!(
    name: "Microwave",
    category: "Amenities",
    subcategory: "Kitchen and d`ining"
)

cooking_basics = Feature.create!(
    name: "Cooking basics",
    description: "Pots and pans, oil, salt and pepper",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

dishes = Feature.create!(
    name: "Dishes and silverware",
    description: "Bowls, chopsticks, plates, cups, etc.",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

coffee_maker = Feature.create!(
    name: "Coffee maker",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

parking = Feature.create!(
    name: "Free street parking",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

elevator = Feature.create!(
    name: "Elevator",
    description: "The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

self_checkin = Feature.create!(
    name: "Self check-in",
    category: "Amenities",
    subcategory: "Services"
)

lockbox = Feature.create!(
    name: "Lockbox",
    category: "Amenities",
    subcategory: "Services"
)
  
# Listing Feature 1
lf1 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: hair_dryer.id
)

# Listing Feature 2
lf2 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: washer.id
)

# Listing Feature 3
lf3 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: tv.id
)

# Listing Feature 4
lf4 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: heating.id
)


# Listing Feature 5
lf5 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: smoke_alarm.id
)

# Listing Feature 6
lf6 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: wifi.id
)

# Listing Feature 7
lf7 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: kitchen.id
)

# Listing Feature 8
lf8 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: self_checkin.id
)

# Listing Feature 9
lf9 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: shampoo.id
)

# Listing Feature 10
lf10 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: essentials.id
)

# Listing Feature 11
lf11 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: heating.id
)

# Listing Feature 12
lf12 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: air_conditioning.id
)


# Listing Feature 13
lf13 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: co_alarm.id
)

# Listing Feature 14
lf14 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: workspace.id
)

# Listing Feature 15
lf15 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: parking.id
)

# Listing Feature 16
lf16 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: lockbox.id
)



ListingFeature.create!(
    listing_id: l11.id,
    feature_id: hair_dryer.id
)


ListingFeature.create!(
    listing_id: l11.id,
    feature_id: essentials.id
)


ListingFeature.create!(
    listing_id: l11.id,
    feature_id: tv.id
)


ListingFeature.create!(
    listing_id: l11.id,
    feature_id: air_conditioning.id
)

ListingFeature.create!(
    listing_id: l11.id,
    feature_id: co_alarm.id
)

ListingFeature.create!(
    listing_id: l11.id,
    feature_id: kitchen.id
)

ListingFeature.create!(
    listing_id: l11.id,
    feature_id: dishes.id
)

ListingFeature.create!(
    listing_id: l11.id,
    feature_id: self_checkin.id
)



# AWS S3
pathname = "https://mybnb-lucyluo-dev.s3.us-west-1.amazonaws.com/App-AWS/"

# should attach default image before validation
demo.photo.attach(
    io: URI.open("https://mybnb-lucyluo-dev.s3.us-west-1.amazonaws.com/App-AWS/u-default.jpeg"),
    filename: "u-default.jpeg"
)

# https://mybnb-lucyluo-dev.s3.us-west-1.amazonaws.com/App-AWS/u-default.jpeg

lucy.photo.purge
cindy.photo.purge
wendy.photo.purge
evie.photo.purge
alex.photo.purge
adam.photo.purge
anthonie.photo.purge
danny.photo.purge
abby.photo.purge
chris.photo.purge
mike.photo.purge
paulo.photo.purge

lucy.photo.attach(
    io: URI.open("#{pathname}lucy.jpeg"),
    filename: "lucy.webp"
)

cindy.photo.attach(
    io: URI.open("#{pathname}cindy.jpeg"),
    filename: "cindy.jpeg"
)

wendy.photo.attach(
    io: URI.open("#{pathname}wendy.jpeg"),
    filename: "wendy.jpeg"
)

evie.photo.attach(
    io: URI.open("#{pathname}evie.jpeg"),
    filename: "evie.jpeg"
)

alex.photo.attach(
    io: URI.open("#{pathname}alex.jpeg"),
    filename: "alex.jpeg"
)

adam.photo.attach(
    io: URI.open("#{pathname}adam.png"),
    filename: "adam.jpeg"
)
anthonie.photo.attach(
    io: URI.open("#{pathname}anthonie.jpeg"),
    filename: "anthonie.jpeg"
)
danny.photo.attach(
    io: URI.open("#{pathname}danny.jpeg"),
    filename: "danny.jpeg"
)
abby.photo.attach(
    io: URI.open("#{pathname}abby.jpeg"),
    filename: "abby.jpeg"
)
chris.photo.attach(
    io: URI.open("#{pathname}chris.jpeg"),
    filename: "chris.jpeg"
)
mike.photo.attach(
    io: URI.open("#{pathname}mike.jpeg"),
    filename: "mike.jpeg"
)
paulo.photo.attach(
    io: URI.open("#{pathname}paulo.png"),
    filename: "paulo.jpeg"
)


# demo.save!
# lucy.save!
# cindy.save!
# wendy.save!
# evie.save!


l1.photos.attach(
    io: URI.open("#{pathname}l1-1.webp"),
    filename: "l1-1.webp"
)

l1.photos.attach(
    io: URI.open("#{pathname}l1-2.webp"),
    filename: "l1-2.webp"
)

l1.photos.attach(
    io: URI.open("#{pathname}l1-3.webp"),
    filename: "l1-3.webp"
)

l1.photos.attach(
    io: URI.open("#{pathname}l1-4.webp"),
    filename: "l1-4.webp"
)

l1.photos.attach(
    io: URI.open("#{pathname}l1-5.webp"),
    filename: "l1-5.webp"
)


l2.photos.attach(
    io: URI.open("#{pathname}l2-1.webp"),
    filename: "l2-1.webp"
)

l2.photos.attach(
    io: URI.open("#{pathname}l2-2.webp"),
    filename: "l2-2.webp"
)

l2.photos.attach(
    io: URI.open("#{pathname}l2-3.webp"),
    filename: "l2-3.webp"
)

l2.photos.attach(
    io: URI.open("#{pathname}l2-4.webp"),
    filename: "l2-4.webp"
)

l2.photos.attach(
    io: URI.open("#{pathname}l2-5.webp"),
    filename: "l2-5.webp"
)

l11.photos.attach(
    io: URI.open("#{pathname}l11-1.webp"),
    filename: "l11-1.webp"
)

l11.photos.attach(
    io: URI.open("#{pathname}l11-2.webp"),
    filename: "l11-2.webp"
)

l11.photos.attach(
    io: URI.open("#{pathname}l11-3.webp"),
    filename: "l11-3.webp"
)

l11.photos.attach(
    io: URI.open("#{pathname}l11-4.webp"),
    filename: "l11-4.webp"
)

l11.photos.attach(
    io: URI.open("#{pathname}l11-5.webp"),
    filename: "l11-5.webp"
)


l3 = Listing.create!(
    title: "2br Victorian House with Breathtaking views",
    description: "Amazing Victorian House on top of Potrero Hill one of the best places in San Francisco to have a magnificent view of the city. Spacious house with a breathtaking terrace and a gorgeous garden. Wifi, parking, access to Netflix, Amazon, Peacock. Very close to downtown, the Mission, Castro, Ferry building, AT&T Giants, Chase Center, general hospital, UCSF, just 15 minutes from the airport. Great restaurants, wineries, parks and tours at historical Anchor Steam Factory in the neighborhood.",
    type_of_place: "Entire place",
    property_type: "House",
    max_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 1,
    street_address: "750 Rhode Island St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94107",
    country: "United States",
    region: "North America",
    lat: 37.760147,
    lng: -122.402630,
    currency: "USD" ,
    price: 342.00,
    price_units: "per night" ,
    additional_guest_charge: 83,
    other_fees: "129;82;93",
    other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
    host_id: wendy.id,
    is_posted: true
)

l3.photos.attach(
    io: URI.open("#{pathname}l3-1.webp"),
    filename: "l3-1.webp"
)

l3.photos.attach(
    io: URI.open("#{pathname}l3-2.webp"),
    filename: "l3-2.webp"
)

l3.photos.attach(
    io: URI.open("#{pathname}l3-3.webp"),
    filename: "l3-3.webp"
)

l3.photos.attach(
    io: URI.open("#{pathname}l3-4.webp"),
    filename: "l3-4.webp"
)

l3.photos.attach(
    io: URI.open("#{pathname}l3-5.webp"),
    filename: "l3-5.webp"
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l3.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: workspace.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: parking.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: bathtub.id
)

Review.create!(
    listing_id: l3.id,
    reviewer_id: chris.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 4,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "Had a great time at this stay! Had everything needed for a great weekend."
)

Review.create!(
    listing_id: l3.id,
    reviewer_id: mike.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Great location and amazing porch to sit on. Had a great time."
)

Review.create!(
    listing_id: l3.id,
    reviewer_id: abby.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 3,
    value: 2,
    comment: "Such a nice place! Great views from the deck, nice private garden, comfy beds, great location. Small grocery around the corner and great restaurants within a short walk!"
)


l4  = Listing.create!(
    title: "Watch the Sunset at a Boho-Chic Studio with Private Terrace",
    description: "Open French doors to a wooden dining patio overlooking the Olympic Club’s golf course and Pacific skyline. Inside, cheerfully eclectic textiles, prints, and wicker accents create an artsy, relaxed vibe. Plants and floral accents bring the outside in.",
    type_of_place: "Private room",
    property_type: "House",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    street_address: "237 Northgate Ave",
    city: "Daly City",
    state: "CA",
    zip_code: "94015",
    country: "United States",
    region: "North America",
    lat: 37.7022646,
    lng: -122.4919588,
    currency: "USD" ,
    price: 211.00,
    price_units: "per night" ,
    additional_guest_charge: 124,
    other_fees: "129;82;93",
    other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
    host_id: lucy.id,
    is_posted: true
)

l4.photos.attach(
    io: URI.open("#{pathname}l4-1.webp"),
    filename: "l4-1.webp"
)

l4.photos.attach(
    io: URI.open("#{pathname}l4-2.webp"),
    filename: "l4-2.webp"
)

l4.photos.attach(
    io: URI.open("#{pathname}l4-3.webp"),
    filename: "l4-3.webp"
)

l4.photos.attach(
    io: URI.open("#{pathname}l4-4.webp"),
    filename: "l4-4.webp"
)

l4.photos.attach(
    io: URI.open("#{pathname}l4-5.webp"),
    filename: "l4-5.webp"
)

ListingFeature.create!(
    listing_id: l4.id,
    feature_id: self_checkin.id
)


ListingFeature.create!(
    listing_id: l4.id,
    feature_id: parking.id
)

ListingFeature.create!(
    listing_id: l4.id,
    feature_id: kitchen.id
)

ListingFeature.create!(
    listing_id: l4.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l4.id,
    feature_id: essentials.id
)

ListingFeature.create!(
    listing_id: l4.id,
    feature_id: coffee_maker.id
)


l5 = Listing.create!(
    title: "Dorm Beds at Social SF Hostel #1",
    description: "Our social and vibrant hostel in downtown SF is the place to stay! We invite travelers and adventurers of all ages, from all corners of the globe, to rest their heads at this historic hostel in the heart of San Francisco. We pride ourselves on creating a community vibe and a space that encourages guests to gather together, exchange travel stories, and get to know one another.",
    type_of_place: "Shared room",
    property_type: "Hotel",
    max_guests: 5,
    num_bedrooms: 1,
    num_beds: 8,
    num_baths: 10,
    street_address: "455 Vallejo St.",
    city: "San Francisco",
    state: "CA",
    zip_code: "94133",
    country: "United States",
    region: "North America",
    lat: 37.7989541,
    lng: -122.4051057,
    currency: "USD" ,
    price: 59,
    price_units: "per night" ,
    additional_guest_charge: 59,
    other_fees: "17;19",
    other_fees_type: "Service fee;Occupancy taxes and fees",
    host_id: alex.id,
    is_posted: true
)

l5.photos.attach(
    io: URI.open("#{pathname}l5-1.webp"),
    filename: "l5-1.webp"
)

l5.photos.attach(
    io: URI.open("#{pathname}l5-2.webp"),
    filename: "l5-2.webp"
)

l5.photos.attach(
    io: URI.open("#{pathname}l5-3.webp"),
    filename: "l5-3.webp"
)

l5.photos.attach(
    io: URI.open("#{pathname}l5-4.webp"),
    filename: "l5-4.webp"
)

l5.photos.attach(
    io: URI.open("#{pathname}l5-5.webp"),
    filename: "l5-5.webp"
)

ListingFeature.create!(
    listing_id: l5.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l5.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l5.id,
    feature_id: washer.id
)

ListingFeature.create!(
    listing_id: l5.id,
    feature_id: microwave.id
)

ListingFeature.create!(
    listing_id: l5.id,
    feature_id: fridge.id
)


Review.create!(
    listing_id: l5.id,
    reviewer_id: adam.id,
    cleanliness: 3,
    accuracy: 3,
    communication: 4,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "Great place. Not \"great for a hostel\" but just excellent in general. Shoutout to all the lovely front desk people :)"
)

Review.create!(
    listing_id: l5.id,
    reviewer_id: lucy.id,
    cleanliness: 4,
    accuracy: 4,
    communication: 3,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "This was the first hostile I ever stayed at and I would recommend this place to anyone!!"
)

Review.create!(
    listing_id: l5.id,
    reviewer_id: danny.id,
    cleanliness: 3,
    accuracy: 4,
    communication: 4,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "If you can’t find a bed on airbnb, they have I think 120 beds so just give em a call!!"
)


# temp-l = Listing.create!(
#     title: "2br Victorian House with Breathtaking views",
#     description: "Amazing Victorian House on top of Potrero Hill one of the best places in San Francisco to have a magnificent view of the city. Spacious house with a breathtaking terrace and a gorgeous garden. Wifi, parking, access to Netflix, Amazon, Peacock.Very close to downtown, the Mission, Castro, Ferry building, AT&T Giants, Chase Center, general hospital, UCSF, just 15 minutes from the airport. Great restaurants, wineries, parks and tours at historical Anchor Steam Factory in the neighborhood.",
#     type_of_place: "Entire place",
#     property_type: "House",
#     max_guests: 4,
#     num_bedrooms: 2,
#     num_beds: 2,
#     num_baths: 1,
#     street_address: "750 Rhode Island St",
#     city: "San Francisco",
#     state: "New York",
#     zip_code: "94107",
#     country: "United States",
#     region: "North America",
#     lat: 37.760147,
#     lng: -122.402630,
#     currency: "USD" ,
#     price: 451.00,
#     price_units: "per night" ,
#     additional_guest_charge: 100,
#     other_fees: "129;82;93",
#     other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
#     host_id: wendy.id,
#     is_posted: true
# )

# temp-l.photos.attach(
#     io: URI.open("#{pathname}temp-l-1.webp"),
#     filename: "temp-l-1.webp"
# )

# temp-l.photos.attach(
#     io: URI.open("#{pathname}temp-l-2.webp"),
#     filename: "temp-l-2.webp"
# )

# temp-l.photos.attach(
#     io: URI.open("#{pathname}temp-l-3.webp"),
#     filename: "temp-l-3.webp"
# )

# temp-l.photos.attach(
#     io: URI.open("#{pathname}temp-l-4.webp"),
#     filename: "temp-l-4.webp"
# )

# temp-l.photos.attach(
#     io: URI.open("#{pathname}temp-l-5.webp"),
#     filename: "temp-l-5.webp"
# )

# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: kitchen.id
# )


# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: wifi.id
# )

# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: workspace.id
# )

# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: parking.id
# )

# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: tv.id
# )

# ListingFeature.create!(
#     listing_id: temp-l.id,
#     feature_id: bathtub.id
# )


# Review.create!(
#     listing_id: temp-l.id,
#     reviewer_id: evie.id,
#     cleanliness: 5,
#     accuracy: 5,
#     communication: 5,
#     location: 5,
#     check_in: 4,
#     value: 4,
#     comment: "Great place. Not \"great for a hostel\" but just excellent in general. Shoutout to all the lovely front desk people :)"
# )

# Review.create!(
#     listing_id: temp-l.id,
#     reviewer_id: cindy.id,
#     cleanliness: 5,
#     accuracy: 4,
#     communication: 5,
#     location: 5,
#     check_in: 3,
#     value: 2,
#     comment: "Such a nice place! Great views from the deck, nice private garden, comfy beds, great location. Small grocery around the corner and great restaurants within a short walk.!"
# )


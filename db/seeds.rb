require 'open-uri'
# AWS S3
pathname = "https://mybnb-lucyluo-dev.s3.us-west-1.amazonaws.com/App-AWS/"


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
    other_fees: "61;79",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: lucy.id,
    is_posted: true
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
    price: 242.00,
    price_units: "per night" ,
    additional_guest_charge: 73,
    other_fees: "92;72;83",
    other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
    host_id: wendy.id,
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
    other_fees: "55;66",
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
    price: 238.00,
    price_units: "per night" ,
    additional_guest_charge: 96,
    other_fees: "52;76",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: cindy.id,
    is_posted: true
)

# Review 1
r1 = Review.create!(
    listing_id: l1.id,
    reviewer_id: cindy.id,
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
    user_id: lucy.id,
    listing_id: l1.id,
    num_guests: 2,
    start_date: DateTime.new(2022,8,14),
    end_date: DateTime.new(2022,8,17),
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

pool = Feature.create!(
    name: "Shared pool",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

sauna = Feature.create!(
    name: "Shared sauna",
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

# l3 continued... moved above l2 for ordering
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
    value: 4,
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
    price: 188.00,
    price_units: "per night" ,
    additional_guest_charge: 124,
    other_fees: "94;72;76",
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
    lat: 37.801928,
    lng: -122.410182,
    currency: "USD" ,
    price: 45,
    price_units: "per night" ,
    additional_guest_charge: 45,
    other_fees: "13;15",
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


l6 = Listing.create!(
    title: "Ocean Beach Getaway - Entire spacious suite",
    description: "Great Ocean Beach location, nearly 800 square ft (70 square meter) private guest suite. 10 mins walking distance from the beach. 5 mins walking to Golden Gate Park and Dutch Windmill! Very close to the Cliff House, Lands End, and Golden gate bridge. Private suite with a full bathroom, kitchenette, spacious living room and two bedrooms. Street parking is free in the neighborhood. The suite is the ground floor of a two-story house. The hosts live upstairs.",
    type_of_place: "Entire place",
    property_type: "Guesthouse",
    max_guests: 4,
    num_bedrooms: 2,
    num_beds: 3,
    num_baths: 1,
    street_address: "757 47th Ave",
    city: "San Francisco",
    state: "CA",
    zip_code: "94121",
    country: "United States",
    region: "North America",
    lat: 37.77336120605469,
    lng: -122.50791931152344,
    currency: "USD" ,
    price: 221,
    price_units: "per night" ,
    additional_guest_charge: 50,
    other_fees: "61;32;38",
    other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
    host_id: anthonie.id,
    is_posted: true
)

l6.photos.attach(
    io: URI.open("#{pathname}l6-1.webp"),
    filename: "l6-1.webp"
)

l6.photos.attach(
    io: URI.open("#{pathname}l6-2.webp"),
    filename: "l6-2.webp"
)

l6.photos.attach(
    io: URI.open("#{pathname}l6-3.webp"),
    filename: "l6-3.webp"
)

l6.photos.attach(
    io: URI.open("#{pathname}l6-4.webp"),
    filename: "l6-4.webp"
)

l6.photos.attach(
    io: URI.open("#{pathname}l6-5.webp"),
    filename: "l6-5.webp"
)

ListingFeature.create!(
    listing_id: l6.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l6.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l6.id,
    feature_id: hair_dryer.id
)

ListingFeature.create!(
    listing_id: l6.id,
    feature_id: bathtub.id
)

ListingFeature.create!(
    listing_id: l6.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l6.id,
    feature_id: bathtub.id
)


Review.create!(
    listing_id: l6.id,
    reviewer_id: evie.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "We had a wonderful stay here -- quiet and comfortable. The place is close to local restaurants, as well as a short walk to the beach."
)

Review.create!(
    listing_id: l6.id,
    reviewer_id: cindy.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 4,
    location: 4,
    check_in: 4,
    value: 5,
    comment: "Such a cute place, we really enjoyed our stay"
)

Review.create!(
    listing_id: l6.id,
    reviewer_id: alex.id,
    cleanliness: 4,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "We had a great stay. The proximity to Golden Gate Park, the beach, Lands End, the bridge and the numerous amazing eateries makes the location nearly perfect. The neighborhood is one of the safest in San Francisco and we felt abundantly comfortable walking about with our two younger daughters. Great place!"
)


l7 = Listing.create!(
    title: "Cindy & Frank's Place",
    description: "Cindy and Frank’s place is a comfortable, spacious studio with a private entrance, and all the comforts of home. It is located in the renovated basement of a 19th century farmhouse and is fully apportioned with a queen size bed, a large bathroom with a deep tub and access to both front and back yards. It has all the basics, and then some. It is a perfect base of operations for days and nights on the town or around the Bay and a great place to stay in and get things done.",
    type_of_place: "Entire place",
    property_type: "Appartment",
    max_guests: 3,
    num_bedrooms: 0,
    num_beds: 1,
    num_baths: 1,
    street_address: "3199 Mission St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94107",
    country: "United States",
    region: "North America",
    lat: 37.7456129,
    lng: -122.4195709,
    currency: "USD" ,
    price: 159,
    price_units: "per night" ,
    additional_guest_charge: 25,
    other_fees: "77;62;73",
    other_fees_type: "Cleaning fee;Service fee;Occupancy taxes and fees",
    host_id: cindy.id,
    is_posted: true
)

l7.photos.attach(
    io: URI.open("#{pathname}l7-1.webp"),
    filename: "l7-1.webp"
)

l7.photos.attach(
    io: URI.open("#{pathname}l7-2.webp"),
    filename: "l7-2.webp"
)

l7.photos.attach(
    io: URI.open("#{pathname}l7-3.webp"),
    filename: "l7-3.webp"
)

l7.photos.attach(
    io: URI.open("#{pathname}l7-4.webp"),
    filename: "l7-4.webp"
)

l7.photos.attach(
    io: URI.open("#{pathname}l7-5.webp"),
    filename: "l7-5.webp"
)

ListingFeature.create!(
    listing_id: l7.id,
    feature_id: bathtub.id
)

ListingFeature.create!(
    listing_id: l7.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l7.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l7.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l7.id,
    feature_id: hair_dryer.id
)

ListingFeature.create!(
    listing_id: l7.id,
    feature_id: self_checkin.id
)

Review.create!(
    listing_id: l7.id,
    reviewer_id: evie.id,
    cleanliness: 3,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Very thoughtful, local, recommendations. The space is charming and well located to get a sense of the Mission/Bengal Heights neighbourhoods in SF. Would highly recommend staying here!"
)

Review.create!(
    listing_id: l7.id,
    reviewer_id: danny.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "Very clean, modern, good communication. If we come back to San Fran will definitely stay here again"
)

Review.create!(
    listing_id: l7.id,
    reviewer_id: paulo.id,
    cleanliness: 4,
    accuracy: 5,
    communication: 5,
    location: 4,
    check_in: 5,
    value: 4,
    comment: "great place with lots to do nearby. Cindy was a wonderful host and quick to respond to any questions we had. would stay again next time in the area!"
)


l12 = Listing.create!(
    title: "Spacious, Sunlit Limestone 1 br",
    description: "Enjoy the best of Brownstone Brooklyn in our historic limestone townhouse, built in 1897! This space with private entrance is located on the light-filled third floor of our owner-occupied home and outfitted with vintage and modern furnishings.",
    type_of_place: "Entire place",
    property_type: "Appartment",
    max_guests: 4,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    street_address: "323 MacDonough St",
    city: "Brooklyn",
    state: "CA",
    zip_code: "11233",
    country: "United States",
    region: "North America",
    lat: 40.68220138549805,
    lng: -73.93340301513672,
    currency: "USD" ,
    price: 211.00,
    price_units: "per night" ,
    additional_guest_charge: 25,
    other_fees: "116;49",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: paulo.id,
    is_posted: true
)

l12.photos.attach(
    io: URI.open("#{pathname}l12-1.webp"),
    filename: "l12-1.webp"
)

l12.photos.attach(
    io: URI.open("#{pathname}l12-2.webp"),
    filename: "l12-2.webp"
)

l12.photos.attach(
    io: URI.open("#{pathname}l12-3.webp"),
    filename: "l12-3.webp"
)

l12.photos.attach(
    io: URI.open("#{pathname}l12-4.webp"),
    filename: "l12-4.webp"
)

l12.photos.attach(
    io: URI.open("#{pathname}l12-5.webp"),
    filename: "l12-5.webp"
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: workspace.id
)


ListingFeature.create!(
    listing_id: l12.id,
    feature_id: self_checkin.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: kitchen.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: bathtub.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: washer.id
)

ListingFeature.create!(
    listing_id: l12.id,
    feature_id: air_conditioning.id
)


Review.create!(
    listing_id: l12.id,
    reviewer_id: lucy.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "This is an absolutely fantastic spot. It was extremely clean and stocked with everything we needed for our stay. The air conditioning kept us cool in the 90+ degree weather while we were there, and the location was great as well. We would definitely stay here again!"
)

Review.create!(
    listing_id: l12.id,
    reviewer_id: anthonie.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 3,
    value: 2,
    comment: "Great location and exactly as advertised."
)


l13 = Listing.create!(
    title: "2,000 Sq Ft Two-Bedroom Loft",
    description: "As an AirBnB consultant between LA, NYC and The Catskills, I swore I would finally design a home that I keep to myself...buuut looks like I’m succumbing to BnBing it afterall. 2,000 sq ft to yourself with the amenities of a home. Can’t beat that in a hotel in NYC for this price. Do note, however, that this is my home and not a hotel, so only those booked are allowed inside, with Quiet Hours from 10pm-7am. There is a strict $1,000 fine if this is broken. G Train: Classon, 20 mins to Manhattan",
    type_of_place: "Private room",
    property_type: "Appartment",
    max_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 1,
    street_address: "116 N 5th St",
    city: "Brooklyn",
    state: "NY",
    zip_code: "11247",
    country: "United States",
    region: "North America",
    lat: 40.7127281,
    lng: -74.0060152,
    currency: "USD" ,
    price: 417.00,
    price_units: "per night" ,
    additional_guest_charge: 122,
    other_fees: "54",
    other_fees_type: "Service fee",
    host_id: abby.id,
    is_posted: true
)

l13.photos.attach(
    io: URI.open("#{pathname}l13-1.webp"),
    filename: "l13-1.webp"
)

l13.photos.attach(
    io: URI.open("#{pathname}l13-2.webp"),
    filename: "l13-2.webp"
)

l13.photos.attach(
    io: URI.open("#{pathname}l13-3.webp"),
    filename: "l13-3.webp"
)

l13.photos.attach(
    io: URI.open("#{pathname}l13-4.webp"),
    filename: "l13-4.webp"
)

l13.photos.attach(
    io: URI.open("#{pathname}l13-5.webp"),
    filename: "l13-5.webp"
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l13.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: workspace.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: parking.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: air_conditioning.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: hair_dryer.id
)

ListingFeature.create!(
    listing_id: l13.id,
    feature_id: elevator.id
)


Review.create!(
    listing_id: l13.id,
    reviewer_id: wendy.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Amazing loft and host! You will not be disappointed!"
)

Review.create!(
    listing_id: l13.id,
    reviewer_id: evie.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 4,
    location: 3,
    check_in: 5,
    value: 5,
    comment: "The flat is stunning. Huge space, looks even better than the photos. Definitely a recommend when staying in NY."
)

Review.create!(
    listing_id: l13.id,
    reviewer_id: chris.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 4,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "AMAZING place! Pictures are spot on. Highly recommend! Beds were so comfy! Close to lots of fun things to do in BK."
)


l8 = Listing.create!(
    title: "Cozy guest studio in Russian Hill",
    description: "Cozy studio guest suite/apartment, with separate entrance. Bathroom w/shower, large closet (8x3 ft), small kitchenette. Queen bed + pull-out couch (twin bed). Very quiet. Away from street. Private outdoor area. In Polk & Chestnut area, close to great restaurants/cafes, easy walk to Aquatic Park and Ghirardelli Square.",
    type_of_place: "Entire place",
    property_type: "Guesthouse",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    street_address: "1183 Chestnut St",
    city: "San Francisco",
    state: "CA",
    zip_code: "94109",
    country: "United States",
    region: "North America",
    lat: 37.80255126953125,
    lng: -122.42267608642578,
    currency: "USD" ,
    price: 199,
    price_units: "per night" ,
    additional_guest_charge: 45,
    other_fees: "75;39",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: adam.id,
    is_posted: true
)

l8.photos.attach(
    io: URI.open("#{pathname}l8-1.webp"),
    filename: "l8-1.webp"
)

l8.photos.attach(
    io: URI.open("#{pathname}l8-2.webp"),
    filename: "l8-2.webp"
)

l8.photos.attach(
    io: URI.open("#{pathname}l8-3.webp"),
    filename: "l8-3.webp"
)

l8.photos.attach(
    io: URI.open("#{pathname}l8-4.webp"),
    filename: "l8-4.webp"
)

l8.photos.attach(
    io: URI.open("#{pathname}l8-5.webp"),
    filename: "l8-5.webp"
)

ListingFeature.create!(
    listing_id: l8.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l8.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l8.id,
    feature_id: workspace.id
)

ListingFeature.create!(
    listing_id: l8.id,
    feature_id: parking.id
)

ListingFeature.create!(
    listing_id: l8.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l8.id,
    feature_id: bathtub.id
)


Review.create!(
    listing_id: l8.id,
    reviewer_id: lucy.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "Comfortable and cozy and in an amazing location to explore the city! Communication was clear and easy. Loved the stay!"
)

Review.create!(
    listing_id: l8.id,
    reviewer_id: evie.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 5,
    comment: "Great stay! Great location too. Very central and easy to commute."
)

Review.create!(
    listing_id: l8.id,
    reviewer_id: danny.id,
    cleanliness: 4,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "This space was exactly what we were looking for. We had a great time being close to Fisherman’s wharf and many other attractions. It was clean and exactly what we expected from the listing."
)

l21 = Listing.create!(
    title: "Amazing Location: 1BDR + Den by Scotiabank Arena",
    description: "High Floor Cozy 1 BDR + Den, 1 baths condo with unobstructed view of the city/lake, and right next to Scotiabank Arena, ideal stay for business & leisure! WALKING DISTANCE to: CN Tower, Scotiabank Arena, Rogers Center, Toronto Convention Center, Ripley's Aquarium, Royal Alexander Theater, St. Lawrence's Marker, Harbourfront, etc",
    type_of_place: "Entire place",
    property_type: "Appartment",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    street_address: "295 Adelaide St W",
    city: "Toronto",
    state: "ON",
    zip_code: "M5V 0L4",
    country: "Canada",
    region: "North America",
    lat: 43.6459356,
    lng: -79.3995823,
    currency: "USD" ,
    price: 167,
    price_units: "per night" ,
    additional_guest_charge: 5,
    other_fees: "58;38",
    other_fees_type: "Cleaning fee;Service fee",
    host_id: lucy.id,
    is_posted: true
)

l21.photos.attach(
    io: URI.open("#{pathname}l21-1.webp"),
    filename: "l21-1.webp"
)

l21.photos.attach(
    io: URI.open("#{pathname}l21-2.webp"),
    filename: "l21-2.webp"
)

l21.photos.attach(
    io: URI.open("#{pathname}l21-3.webp"),
    filename: "l21-3.webp"
)

l21.photos.attach(
    io: URI.open("#{pathname}l21-4.webp"),
    filename: "l21-4.webp"
)

l21.photos.attach(
    io: URI.open("#{pathname}l21-5.webp"),
    filename: "l21-5.webp"
)
ListingFeature.create!(
    listing_id: l21.id,
    feature_id: kitchen.id
)


ListingFeature.create!(
    listing_id: l21.id,
    feature_id: wifi.id
)

ListingFeature.create!(
    listing_id: l21.id,
    feature_id: workspace.id
)

ListingFeature.create!(
    listing_id: l21.id,
    feature_id: pool.id
)

ListingFeature.create!(
    listing_id: l21.id,
    feature_id: sauna.id
)

ListingFeature.create!(
    listing_id: l21.id,
    feature_id: tv.id
)

ListingFeature.create!(
    listing_id: l21.id,
    feature_id: elevator.id
)


Review.create!(
    listing_id: l21.id,
    reviewer_id: wendy.id,
    cleanliness: 5,
    accuracy: 5,
    communication: 4,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Lucy has a great place with an excellent location. It was a good value and would definitely stay here again."
)

Review.create!(
    listing_id: l21.id,
    reviewer_id: evie.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 5,
    comment: "Perfect location in Toronto. Close to everything you need! The apartment was clean and the beds are very comfy. Would recommend staying here!"
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
#     state: "CA",
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


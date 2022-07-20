require 'open-uri'

User.destroy_all
Listing.destroy_all
Feature.destroy_all
ListingFeature.destroy_all
Reservation.destroy_all
Review.destroy_all



# User 1
u1 = User.create!(
    email: "demo.user@mybnb.com", 
    password: "123123", 
    fname: "Demo",
    lname: "User"
)

# User 2
u2 = User.create!(
    email: "lucy.luo@mybnb.com", 
    password: "123123", 
    fname: "Lucy",
    lname: "Luo"
)

# User 3
u3 = User.create!(
    email: "cindy.vuong@mybnb.com", 
    password: "123123", 
    fname: "Cindy",
    lname: "Vuong"
)

# User 4
u4 = User.create!(
    email: "wendy.shi@mybnb.com", 
    password: "123123", 
    fname: "Wendy",
    lname: "Shi"
)

# User 5
u5 = User.create!(
    email: "evie.zeng@mybnb.com", 
    password: "123123", 
    fname: "Evie",
    lname: "Seng"
)

# Listing 1
l1 = Listing.create!(
    title: "Beautiful and Spacious Loft - SOMA",
    description: "Beautiful and very Spacious Loft on a clean and protected cul-de-sac. Close to Convention Center and Downtown as well as vibrant nightlife and many excellent restaurants. Two separate living areas to enjoy. Large Balcony overlooks luscious urban garden. Residential street parking permit available upon prior request",
    street_address: "174A Langton St",
    city: "San Francisco",
    state: "California",
    zip_code: "94103",
    country: "United States",
    region: "North America",
    lat: 37.775340,
    lng: -122.407417,
    currency: "USD" ,
    price: 257.00,
    price_units: "per night" ,
    other_fees: "140;163",
    other_fees_type: "Cleaning fee;Service fee",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    property_type: "Condo",
    type_of_place: "Entire Place",
    host_id: u2.id,
    is_posted: true
)

# Listing 2
l2 = Listing.create!(
    title: "Gorgeous Home with Large Golden Gate Bridge Views!",
    description: "Enjoy living in this airy and spacious Mediterranean- style home. Marble counters, custom cabinetry, and hardwood flooring make this home very appealing. Outside, you’ll find a garden and panoramic views of the whole Golden Gate Bridge through our large crystal-clear windows.",
    street_address: "43 Emerson St",
    city: "San Francisco",
    state: "California",
    zip_code: "94118",
    country: "United States",
    region: "North America",
    lat: 37.783160,
    lng: -122.448510,
    currency: "USD" ,
    price: 362.00,
    price_units: "per night" ,
    other_fees: "155;176",
    other_fees_type: "Cleaning fee;Service fee",
    max_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 1,
    property_type: "House",
    type_of_place: "Entire Place",
    host_id: u4.id,
    is_posted: true
)

# Listing 2
l3= Listing.create!(
    title: "Quiet Oasis Near Central Park",
    description: "Style. Simplicity. Serenity. Welcome to our oasis in the heart of Manhattan, steps from 57th and Park. Carefully curated with world-class designer furniture, we’ve spared no expense in providing you with luxury surroundings while making you feel comfortable and at home. If you crave the authentic, personalized experience of staying in an Airbnb PLUS all the comforts and safety of a hotel, then look no more.",
    street_address: "65 E 55th St",
    city: "New York",
    state: "New York",
    zip_code: "10022",
    country: "United States",
    region: "North America",
    lat: 40.760891,
    lng: -73.972130,
    currency: "USD" ,
    price: 432.00,
    price_units: "per night" ,
    other_fees: "153;276",
    other_fees_type: "Cleaning fee;Service fee",
    max_guests: 2,
    num_bedrooms: 1,
    num_beds: 2,
    num_baths: 1,
    property_type: "Condo",
    type_of_place: "Entire Place",
    host_id: u3.id,
    is_posted: true
)

# Review 1
r1 = Review.create!(
    listing_id: l1.id,
    reviewer_id: u3.id,
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
    reviewer_id: u4.id,
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
    reviewer_id: u5.id,
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
    reviewer_id: u2.id,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "It was an awesome week in SF. The place was even better than in the picture. Thanks!"
)

rs1 = Reservation.create!(
    user_id: u1.id,
    listing_id: l2.id,
    num_guests: 2,
    start_date: DateTime.new(2021,9,14),
    end_date: DateTime.new(2009,9,16),
    payment: 1580.04
)

# Feature 1
f1 = Feature.create!(
    name: "Hair dryer",
    category: "Amenities",
    subcategory: "Bathroom",
)

# Feature 2
f2 = Feature.create!(
    name: "Shampoo",
    category: "Amenities",
    subcategory: "Bathroom",
)

# Feature 3
f3 = Feature.create!(
    name: "Washer",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

# Feature 4
f4 = Feature.create!(
    name: "Essentials",
    description: "Towels, bedsheets, soap, and toilet paper",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

# Feature 5
f5 = Feature.create!(
    name: "TV",
    category: "Amenities",
    subcategory: "Entertainment",
)

# Feature 6
f6 = Feature.create!(
    name: "Heating",
    category: "Amenities",
    subcategory: "Heating and Cooling",
)

# Feature 7
f7 = Feature.create!(
    name: "Air conditioning",
    category: "Amenities",
    subcategory: "Heating and Cooling"
)

# Feature 8
f8 = Feature.create!(
    name: "Smoke alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)

# Feature 9
f9 = Feature.create!(
    name: "Carbon monoxide alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)

# Feature 10
f10 = Feature.create!(
    name: "Wifi",
    category: "Amenities",
    subcategory: "Internet and Office"
)

# Feature 11
f11 = Feature.create!(
    name: "Dedicated workspace",
    category: "Amenities",
    subcategory: "Internet and Office"
)

# Feature 12
f12 = Feature.create!(
    name: "Kitchen",
    description: "Space where guests can cook their own meals",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 13
f13 = Feature.create!(
    name: "Refrigerator",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 14
f14 = Feature.create!(
    name: "Microwave",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 15
f15 = Feature.create!(
    name: "Cooking basics",
    description: "Pots and pans, oil, salt and pepper",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 16
f16 = Feature.create!(
    name: "Dishes and silverware",
    description: "Bowls, chopsticks, plates, cups, etc.",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 17
f17 = Feature.create!(
    name: "Coffee maker",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 18
f18 = Feature.create!(
    name: "Free street parking",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

# Feature 19
f19 = Feature.create!(
    name: "Elevator",
    description: "The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

# Feature 20
f20 = Feature.create!(
    name: "Self check-in",
    category: "Amenities",
    subcategory: "Services"
)

# Feature 21
f21 = Feature.create!(
    name: "Lockbox",
    category: "Amenities",
    subcategory: "Services"
)
  
# Listing Feature 1
lf1 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f1.id
)

# Listing Feature 2
lf2 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f3.id
)

# Listing Feature 3
lf3 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f5.id
)

# Listing Feature 4
lf4 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f6.id
)


# Listing Feature 5
lf5 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f8.id
)

# Listing Feature 6
lf6 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f10.id
)

# Listing Feature 7
lf7 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f12.id
)

# Listing Feature 8
lf8 = ListingFeature.create!(
    listing_id: l1.id,
    feature_id: f20.id
)

# Listing Feature 9
lf9 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f2.id
)

# Listing Feature 10
lf10 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f4.id
)

# Listing Feature 11
lf11 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f6.id
)

# Listing Feature 12
lf12 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f7.id
)


# Listing Feature 13
lf13 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f9.id
)

# Listing Feature 14
lf14 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f11.id
)

# Listing Feature 15
lf15 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f18.id
)

# Listing Feature 16
lf16 = ListingFeature.create!(
    listing_id: l2.id,
    feature_id: f21.id
)



ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f1.id
)


ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f4.id
)


ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f5.id
)


ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f7.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f9.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f12.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f16.id
)

ListingFeature.create!(
    listing_id: l3.id,
    feature_id: f20.id
)



# # AWS S3
# pathname = "https://mybnb-lucyluo-dev.s3.us-west-1.amazonaws.com/App-AWS/"

# l1.photos.attach(
#     io: URI.open("#{pathname}l1-1.webp"),
#     filename: "l1-1.webp"
# )

# u2.photos.attach(
#     io: URI.open("#{pathname}u-default.jpeg"),
#     filename: "u-default.jpeg"
# )
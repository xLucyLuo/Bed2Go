
User.destroy_all
Listing.destroy_all
Feature.destroy_all
ListingFeature.destroy_all
Reservation.destroy_all
Review.destroy_all


# User 1
User.create!(
    email: "demo.user@mybnb.com", 
    password: "123123", 
    fname: "Demo",
    lname: "User"
)

# User 2
User.create!(
    email: "lucy.luo@mybnb.com", 
    password: "123123", 
    fname: "Lucy",
    lname: "Luo"
)

# User 3
User.create!(
    email: "cindy.vuong@mybnb.com", 
    password: "123123", 
    fname: "Cindy",
    lname: "Vuong"
)

# User 4
User.create!(
    email: "wendy.shi@mybnb.com", 
    password: "123123", 
    fname: "Wendy",
    lname: "Shi"
)

# User 5
User.create!(
    email: "evie.zeng@mybnb.com", 
    password: "123123", 
    fname: "Evie",
    lname: "Seng"
)

# Listing 1
Listing.create!(
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
    property_type: "Entire Place",
    type_of_place: "Condo",
    host_id: 2,
    is_posted: true
)

# Listing 2
Listing.create!(
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
    property_type: "Entire Place",
    type_of_place: "House",
    host_id: 4,
    is_posted: true
)

# Review 1
Review.create!(
    listing_id: 1,
    reviewer_id: 3,
    cleanliness: 5,
    accuracy: 5,
    communication: 4,
    location: 5,
    check_in: 5,
    value: 3,
    comment: "Perfect stay! Just a little expensive..."
)

# Review 2
Review.create!(
    listing_id: 1,
    reviewer_id: 4,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 4,
    check_in: 5,
    value: 5,
    comment: "Fantastic host and great location! The place was beautiful, spacious and clean."
)

# Review 3
Review.create!(
    listing_id: 1,
    reviewer_id: 5,
    cleanliness: 5,
    accuracy: 5,
    communication: 5,
    location: 5,
    check_in: 4,
    value: 4,
    comment: "Very nice place. It is close to downtown. Quiet and Convenient."
)

# Review 4
Review.create!(
    listing_id: 2,
    reviewer_id: 2,
    cleanliness: 5,
    accuracy: 4,
    communication: 5,
    location: 5,
    check_in: 5,
    value: 5,
    comment: "It was an awesome week in SF. The place was even better than in the picture. Thanks!"
)

Reservation.create!(
    user_id: 1,
    listing_id: 2,
    num_guests: 2,
    start_date: DateTime.new(2021,9,14),
    end_date: DateTime.new(2009,9,16),
    payment: 1580.04
)

# Feature 1
Feature.create!(
    name: "Hair dryer",
    category: "Amenities",
    subcategory: "Bathroom",
)

# Feature 2
Feature.create!(
    name: "Shampoo",
    category: "Amenities",
    subcategory: "Bathroom",
)

# Feature 3
Feature.create!(
    name: "Washer",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

# Feature 4
Feature.create!(
    name: "Essentials",
    description: "Towels, bedsheets, soap, and toilet paper",
    category: "Amenities",
    subcategory: "Bedroom and laundry",
)

# Feature 5
Feature.create!(
    name: "TV",
    category: "Amenities",
    subcategory: "Entertainment",
)

# Feature 6
Feature.create!(
    name: "Heating",
    category: "Amenities",
    subcategory: "Heating and Cooling",
)

# Feature 7
Feature.create!(
    name: "Air conditioning",
    category: "Amenities",
    subcategory: "Heating and Cooling"
)

# Feature 8
Feature.create!(
    name: "Smoke alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)

# Feature 9
Feature.create!(
    name: "Carbon monoxide alarm",
    category: "Amenities",
    subcategory: "Home Safety"
)

# Feature 10
Feature.create!(
    name: "Wifi",
    category: "Amenities",
    subcategory: "Internet and Office"
)

# Feature 11
Feature.create!(
    name: "Dedicated workspace",
    category: "Amenities",
    subcategory: "Internet and Office"
)

# Feature 12
Feature.create!(
    name: "Kitchen",
    description: "Space where guests can cook their own meals",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 13
Feature.create!(
    name: "Refrigerator",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 14
Feature.create!(
    name: "Microwave",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 15
Feature.create!(
    name: "Cooking basics",
    description: "Pots and pans, oil, salt and pepper",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 16
Feature.create!(
    name: "Dishes and silverware",
    description: "Bowls, chopsticks, plates, cups, etc.",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 17
Feature.create!(
    name: "Coffee maker",
    category: "Amenities",
    subcategory: "Kitchen and dining"
)

# Feature 18
Feature.create!(
    name: "Free street parking",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

# Feature 19
Feature.create!(
    name: "Elevator",
    description: "The home or building has an elevator that’s at least 52 inches deep and a doorway at least 32 inches wide",
    category: "Amenities",
    subcategory: "Parking and facilities"
)

# Feature 20
Feature.create!(
    name: "Self check-in",
    category: "Amenities",
    subcategory: "Services"
)

# Feature 21
Feature.create!(
    name: "Lockbox",
    category: "Amenities",
    subcategory: "Services"
)
  
# Listing Feature 1
ListingFeature.create!(
    listing_id: 1,
    feature_id: 1
)

# Listing Feature 2
ListingFeature.create!(
    listing_id: 1,
    feature_id: 3
)

# Listing Feature 3
ListingFeature.create!(
    listing_id: 1,
    feature_id: 5
)

# Listing Feature 4
ListingFeature.create!(
    listing_id: 1,
    feature_id: 6
)


# Listing Feature 5
ListingFeature.create!(
    listing_id: 1,
    feature_id: 8
)

# Listing Feature 6
ListingFeature.create!(
    listing_id: 1,
    feature_id: 10
)

# Listing Feature 7
ListingFeature.create!(
    listing_id: 1,
    feature_id: 12
)

# Listing Feature 8
ListingFeature.create!(
    listing_id: 1,
    feature_id: 20
)



# Listing Feature 9
ListingFeature.create!(
    listing_id: 2,
    feature_id: 2
)

# Listing Feature 10
ListingFeature.create!(
    listing_id: 2,
    feature_id: 4
)

# Listing Feature 11
ListingFeature.create!(
    listing_id: 2,
    feature_id: 6
)

# Listing Feature 12
ListingFeature.create!(
    listing_id: 2,
    feature_id: 7
)


# Listing Feature 13
ListingFeature.create!(
    listing_id: 2,
    feature_id: 9
)

# Listing Feature 14
ListingFeature.create!(
    listing_id: 2,
    feature_id: 11
)

# Listing Feature 15
ListingFeature.create!(
    listing_id: 2,
    feature_id: 18
)

# Listing Feature 16
ListingFeature.create!(
    listing_id: 2,
    feature_id: 21
)

# <a href="https://mybnb-lucyluo.herokuapp.com/#/"><h1>Mybnb</h1></a> 

**<a href="https://mybnb-lucyluo.herokuapp.com/#/">Mybnb</a>** is a full-stack, single-page application clone of Airbnb that uses React and Redux on the front-end and Ruby on Rails, PostgresSQL and AWS S3 on the back-end.

<ins>**Key Features:**</ins>
+ User authentifiication require users to be logged in to access certain features (e.g. reservations and reviews)
+ Browse listings by various locations (Google Maps API) and apply search filters (e.g. price)
+ Make reservations on available dates and view all bookings
+ Leave ratings and reviews on listings
+ Compatible with various screne sizes

## Technologies, Libraries, APIs

### APIs:
- <ins>**Google Maps Platform**</ins> Maps and Places API for dynamic maps and location search

### Libraries:
- <ins>**React Date Range**</ins> library for displaying available booking dates on calendar

### Front-end:
- Javascript
- React
- Redux
- Node.js
- jQuery
- SCSS

### Back-end:
- Ruby
- Ruby on Rails
- PostgresSQL
- jBuilder

### Cloud Hosting Services
- Heroku
- AWS S3 (Amazon Simple Storage Services)

### Module Bundler
- Webpack


## Application Preview

### Search Listings by Location:
![](https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/location-search-clip.gif)

### Filter by Price:
![](https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/filter.gif)

### Google Maps:
![](https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/google-maps.gif)

### Make Reservations:
![](https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/reservation.gif)

### Write Reviews:
![](https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/review.gif)


### Responsive Web Design:

<p float="left">
  <img src="https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/screen-sizing-main.gif" width="30%" height="122px"/>
  <img src="https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/screen-sizing-show.gif" width="30%" height="122px"/> 
  <img src="https://github.com/xLucyLuo/Mybnb/blob/main/app/assets/images/screenshots/screen-sizing-trip.gif" width="30%" height="122px"/>
</p>

## Code Snippets:

### Rails Filter Query
```ruby
    def index
        bounds = params[:bounds]
        listings = bounds ? Listing.in_bounds(bounds) : Listing.all

        listings = listings.includes(:reviews, :host, :features)

        if params[:minPrice] && params[:maxPrice]
          price_range = (params[:minPrice]..params[:maxPrice])
          listings = listings.where(price: price_range)
        end

        if params[:listingId]
          listings = listings.where(id: params[:listingId])
        end
        
        @listings = listings
        render :index
    end
```

### Rails jBuilder JSON Response
```ruby
json.listings do
  @listings.each do |listing|
    host = listing.host
    json.set! listing.id do
      json.partial! 'listing', listing: listing
      json.host_name host.fname
      ## AWS S3
      json.host_img_url url_for(host.photo)
      json.img_urls listing.photos.map { |photo| url_for(photo) }

        listing.features.each do | feature| 
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
          json.reviewer_img_url url_for(reviewer.photo)
        end
    end
  end
end

@listings.each do |listing|
  json.reservations do
    listing.reservations.each do |reservation|
        json.set! reservation.id do
          json.partial! 'api/reservations/reservation', reservation: reservation
        end
    end
  end
end
```

### Google Maps Listing Filter and Debouncing

```javascript
this.map.addListener("idle", (e) => {
    const { north, south, east, west } = this.map.getBounds().toJSON();

    const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
    };
    if (!this.preventUpdateFilter){
        this.preventUpdateFilter = true;
        this.props.updateFilter("bounds", bounds)
        .then(()=> this.preventUpdateFilter = false);
    }
});
```

### Reservation Calendar Unavailable Days Array (Helper Method)
```javascript
export const getDaysArray = function(start, end) {
    
    let endDate = new Date(end)
    let date = new Date(start)
    const arr = [date]

    while (date < endDate) {
        date.setDate(date.getDate()+1);
        arr.push(date);
    }
    return arr;
};
```
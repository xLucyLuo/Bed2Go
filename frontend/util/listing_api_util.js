export const getListings = () => {
    return $.ajax({
    method: "GET",
    url: "/api/listings"
    })
  };
  
  export const getListing = (id) => {
    return $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
    })
  };
  
  export const postListing = (listing) => {
    return $.ajax({
    method: "POST",
    url: "/api/listings",
    data: { listing }
    })
  };

  export const patchListing = (listing) => {
    return $.ajax({
      method: "PATCH",
      url: `/api/listings${listing.id}`,
      data: { listing }
    })
  };

  export const deleteListing = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/listings/${id}`,
    })
  };
export const getReservations = (filters) => {
    return $.ajax({
    method: "GET",
    url: "/api/reservations",
    data: filters
    // error: (err) => console.log(err)
    })
  };
  
  export const getReservation = (id) => {
    return $.ajax({
    method: "GET",
    url: `/api/reservations/${id}`
    })
  };
  
  export const postReservation = (review) => {
    return $.ajax({
    method: "POST",
    url: "/api/reservations",
    data: { review }
    })
  };

  export const patchReview = (review) => {
    return $.ajax({
      method: "PATCH",
      url: `/api/reservations/${review.id}`,
      data: { review }
    })
  };

  export const deleteReview = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/reservations/${id}`,
    })
  };
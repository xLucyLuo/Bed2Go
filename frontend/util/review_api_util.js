export const getReviews = (filters) => {
    return $.ajax({
    method: "GET",
    url: "/api/reviews",
    data: filters
    // error: (err) => console.log(err)
    })
  };
  
  export const getReview = (id) => {
    return $.ajax({
    method: "GET",
    url: `/api/reviews/${id}`
    })
  };
  
  export const postReview = (review) => {
    return $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review }
    })
  };

  export const patchReview = (review) => {
    return $.ajax({
      method: "PATCH",
      url: `/api/reviews/${review.id}`,
      data: { review }
    })
  };

  export const deleteReview = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/reviews/${id}`,
    })
  };
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
  
  export const postReservation = (reservation) => {
    return $.ajax({
    method: "POST",
    url: "/api/reservations",
    data: { reservation }
    })
  };

  export const patchReservation = (reservation) => {
    return $.ajax({
      method: "PATCH",
      url: `/api/reservations/${reservation.id}`,
      data: { reservation }
    })
  };

  export const deleteReservation = (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/api/reservations/${id}`,
    })
  };
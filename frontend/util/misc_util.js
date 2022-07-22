export const LABEL_MAP = {
    "cleanliness": "Cleanliness",
    "accuracy": "Accuracy",
    "communication": "Communication",
    "location": "Location",
    "checkIn": "Check-in",
    "value": "Value",
}

//miscUtil.SUBTITLE_PLACE_TYPE[typeOfPlace][propertyType]
export const SUBTITLE_PLACE_TYPE = {
    "Entire place": 
    {
        "House": "Entire home",
        "Appartment": "Entire condo",
        "Guesthouse": "Entire guest suite",
        "Hotel": "Room in aparthotel"
    }, 
    "Private room": 
    {
        "House": "Private room",
        "Appartment": "Private room",
        "Guesthouse": "Private room",
        "Hotel": "Private room"
    }, 
    "Shared room": 
    {
        "House": "Shared room",
        "Appartment": "Shared room",
        "Guesthouse": "Shared room",
        "Hotel": "Shared room"
    }  
}

//miscUtil.TITLE_PLACE_TYPE[typeOfPlace][propertyType]
export const TITLE_PLACE_TYPE = {
    "Entire place": 
    {
        "House": "Home",
        "Appartment": "Condo",
        "Guesthouse": "Guest suite",
        "Hotel": "Hotel room"
    }, 
    "Private room": 
    {
        "House": "Private room in home",
        "Appartment": "Private room in condo",
        "Guesthouse": "Private room in guest suite",
        "Hotel": "Hotel Room"
    }, 
    "Shared room": 
    {
        "House": "Shared room in home",
        "Appartment": "Shared room in condo",
        "Guesthouse": "Shared room in guest suite",
        "Hotel": "Shared room in hostel"
    }  
}

export const getDaysArray = function(start, end) {
    
    // const startDate = new Date(start);
    let endDate = new Date(end)
    // endDate = new Date(endDate.getTime() + ((24) * 60 * 60 * 1000))
    let date = new Date(start)
    // date = new Date(date.getTime() + ((24) * 60 * 60 * 1000))

    const arr = [new Date(date.getTime()+ ((24) * 60 * 60 * 1000))]

    while (date < endDate) {
        date.setDate(date.getDate()+1);
        arr.push(new Date(date.getTime()+ ((24) * 60 * 60 * 1000)));
    }

    // for( let arr=[],date=new Date(start); date<=new Date(end); date.setDate(date.getDate()+1)){
    //     returnArr.push(new Date(date));
    // }
    // debugger
    console.log(start)
    return arr;
};
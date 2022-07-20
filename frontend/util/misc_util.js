export const LABEL_MAP = {
    "cleanliness": "Cleanliness",
    "accuracy": "Accuracy",
    "communication": "Communication",
    "location": "Location",
    "checkIn": "Check-in",
    "value": "Value",
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
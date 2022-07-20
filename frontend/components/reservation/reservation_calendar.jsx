
import React from 'react'
import { Calendar, DateRangePicker } from 'react-date-range';

class ReservationCalendar extends React.Component {
  handleSelect(ranges){
    console.log(ranges.toLocaleDateString('en-ca'));
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  render(){
    const startDate = new Date()
    const endDate = new Date(startDate.getTime() + ((24+9) * 60 * 60 * 1000))
    const nextMonthFromStart = new Date(startDate.getTime() + (33*(24) * 60 * 60 * 1000))
                
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }

    const previewOptions = {
      startDate: startDate,
      endDate: new Date(startDate.getTime() + (6*(24+9) * 60 * 60 * 1000)),
      key: 'selection',
    }

    console.log(this.props.disabledDates)

    return (
      // <div className="reservation-calendar-range">
      //   <DateRangePicker
      //     ranges={[selectionRange]}
      //     onChange={this.handleSelect}
      //     months={2}
      //     selected={startDate}
      //     direction={"horizontal"}
      //     showSelectionPreview={true}
      //     showMonthAndYearPickers={false}
      //     minDate={new Date()}
          
      //   />
      // </div>

      <div className="reservation-calendar-range">
        <div className="reservation-calendar">
          <Calendar
          ranges={[selectionRange]}
          selected={startDate}
          onChange={this.handleSelect}
          selectsStart //tells calendar it is part of range
          startDate={startDate}
          // endDate={endDate}
          minDate={new Date()}
          showPreview={true}
          preview={previewOptions}
          // months={2}
          disabledDates={this.props.disabledDates}
          
        />
        </div>
        <div className="reservation-calendar">
          <Calendar
            ranges={[selectionRange]}
            // shownDate= {nextMonthFromStart}
            selected={endDate}
            onChange={this.handleSelect}
            selectsEnd
            // startDate={startDate}
            endDate={endDate}
            minDate={new Date(startDate.getTime() + ((24+9) * 60 * 60 * 1000))}
            showPreview={true}
            preview={previewOptions}
            disabledDates={this.props.disabledDates}
            shownDate={nextMonthFromStart}
          />
        </div>
      </div>


    )
  }
}

export default ReservationCalendar
import React, { Component } from 'react'
import DateButton from '../components/DateButton'

const months = [
  'January', 'February', 'March', 'April', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
]

class Calendar extends Component {
  renderMonth = (data) => (
    <div className="months">
      <h3>{months[data[0]]}</h3>
      <div className="columns is-multiline">
        { Object.keys(data[1]).map(date => {
          return <DateButton key={`${months[data[0]]}-${date}`} date={date} />
          })
        }
      </div>
    </div>
  )

  render(){
    const { data } = this.props;
    return (
      <div>
        <p>
          Select Date and Time
        </p>
        {
          Object.entries(data).map((month) => {
            console.log(month)
            return this.renderMonth(month)
          })
        }
      </div>
    );
  }
}

export default Calendar;

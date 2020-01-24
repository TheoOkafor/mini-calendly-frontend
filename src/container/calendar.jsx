import React, { Component } from 'react'
import DateButton from '../components/DateButton'
import TimeButton from '../components/TimeButton'

const months = [
  'January', 'February', 'March', 'April', 'June', 'July',
  'August', 'September', 'October', 'November', 'December',
]

class Calendar extends Component {
  state = {
    openings: [],
    month: ''
  }

  handleDateClick = (openings) => {
    this.setState({
      openings,
    });
  }

  renderMonth = (data) => (
    <div className="months" key={`${months[data[0]]}`}>
      <h3>{months[data[0]]}</h3>
      <div className="columns is-multiline">
        { Object.entries(data[1]).map(date => {
          return (
            <DateButton
              key={`${months[data[0]]}-${date[0]}`}
              date={date}
              handleClick={this.handleDateClick}
            />)
          })
        }
      </div>
    </div>
  )

  renderOpenings = () => (
    <div className="months">
      { this.state.openings
        .sort((a, b)=> a.hour - b.hour)
        .map(time => (
          <TimeButton
            bookings={this.props.bookings}
            key={time.time}
            time={time} />)
        )
      }
    </div>
  )

  render(){
    const { data } = this.props;
    
    return (
      <div className="columns ">
        <div className="column is-9">
          {
            Object.entries(data).map((month) => {
              return this.renderMonth(month)
            })
          }
        </div>
        <div className="column is-3">
          {this.renderOpenings()}
        </div>
      </div>
    );
  }
}

export default Calendar;

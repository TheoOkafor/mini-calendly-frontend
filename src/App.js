import React, { Component } from 'react';
import axios from 'axios';

import './App.css'
import Calendar from './container/calendar';
import data from './utils/data.json';

const dataObj = JSON.parse(JSON.stringify(data));
const calendarData = {}
const prepCalendar = () => {
  dataObj.calendar.forEach(opening => {
    const datetime = new Date(opening['date_time']);
    const month = datetime.getMonth();
    const dayOfMonth = datetime.getDate();
    const timeData = {
      hour: datetime.getHours(),
      time: opening['date_time']
    }
    if(calendarData[month]) {
      if(calendarData[month][dayOfMonth]) {
        calendarData[month][dayOfMonth].push(timeData);
      } else {
        calendarData[month][dayOfMonth] = [timeData]
      }
    } else {
      calendarData[month] = {
        [dayOfMonth]: [timeData]
      }
    }
  });
  return calendarData;
}

class App extends Component {
  state = {
    data: {}
  }

  fetchData = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/mentor/1');
    this.setState({
      data
    })
  }

  async componentDidMount() {
    await this.fetchData();
    const calendar = prepCalendar();
    this.setState({
      calendar,
    })
  }

  render(){
    const { data } = this.state;
    return (
      <div className="App">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <h2 className="">Mini Calendly</h2>
            <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="">

            </div>
            <div className="columns">
              <div className="column is-2" >
                <p>{data.name}</p>
                <h2>1 hour meeting</h2>
                <h6>GMT {data['time_zone']}</h6>
              </div>
              <div className="column is-8 card">
                <h3>
                  Select Date and Time
                </h3>
                <Calendar
                  data={calendarData}
                  bookings={data.bookings}
                  fetchData={this.fetchData}
                 />
              </div>
              <div className="column is-2" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

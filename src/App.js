import React, { Component } from 'react';
import axios from 'axios';

import './App.css'
import Calendar from './container/calendar';
import prepCalendar from './utils/helpers'

class App extends Component {
  state = {
    data: {},
    calendar: {}
  }

  fetchData = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/mentor/1');
    const prepdCalendar = prepCalendar(data);

    this.setState({
      data,
      calendar: prepdCalendar,
    })
  }

  async componentDidMount() {
    await this.fetchData();
  }

  render(){
    const { data } = this.state;
    return (
      <div className="App">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <h2 className="">Mini Calendly</h2>
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
                {<Calendar
                  data={this.state.calendar}
                  bookings={data.bookings}
                  fetchData={this.fetchData}
                 />}
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

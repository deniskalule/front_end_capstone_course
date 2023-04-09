import { useState, useReducer } from "react";
import React from 'react'
// import { AvailableTimes } from "../helpers/AvailableTimes";

const initialTimeState = {
  availableTimes: ['9:00am', '10:00am','11:00am','12:00noon','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm'],
};

function timeReducer(state, action){
  switch(action.type){
    case 'INITIALIZE_TIMES':
      return {
        ...state,
        availableTimes: action.payload
      };
    
    case 'UPDATE_TIMES':
      return {
        ...state, 
        availableTimes: action.payload
      };

      default:
        throw new Error('Unsupported action type:');
  }
}
function BookingForm() {
  const [bookingData, setBookingData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  // const [availableTimes, setAvailableTimes] = useState([]);
  const [timeState, timeDispatch] = useReducer(timeReducer, initialTimeState);
  

 const initialiseAvailableTimes = (selectedTime) => {
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(error=> console.log(error));
  
  timeDispatch({type:'INITIALIZE_TIMES',payload:timeState.availableTimes});
 }
 const updateAvailableTimes = (selectedTime) => {
    const updatedTimes = timeState.availableTimes.filter((time) => time !== selectedTime );

      timeDispatch({type:'UPDATE_TIMES',payload:updatedTimes});
      console.log(updatedTimes);
 }

  const handleDateChange = (event) => {
     setSelectedDate(event.target.value);
    initialiseAvailableTimes(setSelectedDate);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleNumOfGuestsChange = (event) => {
    setNumOfGuests(event.target.value);
  };
  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Check if the selected time for the selected date is already booked
    const isTimeBooked = bookingData.some(
      (booking) =>
      booking.date === selectedDate && booking.time === selectedTime
    );
    if (isTimeBooked) {
      alert("This time is already booked. Please select another time.");
      updateAvailableTimes(selectedTime);
      return;
    }
    else {
      initialiseAvailableTimes(selectedTime);
    }
    // Add the booking data to the booking data array
    setBookingData([
      ...bookingData,
      {
      date: selectedDate,
      time: selectedTime,
      numOfGuests: numOfGuests,
      occasion: occasion
      },
    ]);
    // Clear the form inputs
    setSelectedDate("");
    setSelectedTime("");
    setNumOfGuests("");
    setOccasion("");
  };

  return (
  <div className='p-3'>
    {/* <div className='container'> */}
      <h2>Table Booking</h2>
      <form className='mt-3' onSubmit={handleBookingSubmit}>
        <div className='form-group'>
          <label>Select a date:</label>
          <input type="date" className='form-control' value={selectedDate} onChange={handleDateChange} />
        </div>

        <div className='form-group'>
          <label>Select a time:</label>
          <select className='form-control' value={selectedTime} onChange={handleTimeChange}>
            <option value="">--Please select a time--</option>
            {
              timeState.availableTimes.map((time) => {
                return <option key={time}>{time}</option>
              }     
              )
            }
          </select>
        </div>
        
        <div className='form-group'>
          <label>Number of guests:</label>
          <input type="number" className='form-control' value={numOfGuests} onChange={handleNumOfGuestsChange}/>
        </div>

        <div className='form-group'>
          <label>Select Occasion</label>
          <select className='form-control' onChange={handleOccasionChange}>
            <option>--Please select occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>

          </select>
        </div>
        
        <button className='btn btn-success mt-2' type="submit">Book</button>
      </form>
    {/* </div> */}

    <h3 className="mt-5">Bookings:</h3>
    <table class="table" border="1">
      <thead className="bg-success text-white">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Number of guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
      {bookingData.map((booking) => (
      <tr key={booking.date + booking.time}>
        <td>{booking.date}</td>
        <td>{booking.time}</td>
        <td>{booking.numOfGuests}</td>
        <td>{booking.occasion}</td>
      </tr>
      ))}
      </tbody>
    </table>
  </div>
  )
}

export default BookingForm
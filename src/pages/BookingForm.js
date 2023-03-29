import { useState } from "react";
import React from 'react'
import { AvailableTimes } from "../helpers/AvailableTimes";

function BookingForm() {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [guests,  setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [myList,setmyList] =  useState({date:resDate, time: resTime, number:guests,occasion: occasion});
    
    function handleSubmit(e)
    {

        e.preventDefault();
        // console.log(resDate);
        // console.log(resTime);
        // console.log(guests);
        // console.log(occasion);

        setmyList([myList, {date:resDate, time:resTime, number:guests, occasion:occasion}]);
        console.log(myList);
        localStorage.setItem('mydata',myList);
    }
    return (
    <div className='bookingForm'>
        <div className=' p-4'>
                <h5 className=''>Reserve a table</h5>
                <hr />
                <form action='' method=''>
                    <div className="form-group">
                      <label htmlFor="">Date: </label>
                      <input type="date" onChange={(e) => {setResDate(e.target.value)}} name="res-date" id="res-date" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""> Reservation Time</label>
                      <select className="form-control" name="" id="res-time" onChange={(e) => {setResTime(e.target.value)}}>
                        {
                          AvailableTimes.map((timelist, key) => {
                            return <option>{timelist.name}</option>
                          })
                        }
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Number of guests</label>
                      <input type="number" name="" id="guests" onChange={(e) => {setGuests(e.target.value)}} className="form-control" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Occasion</label>
                      <select className="form-control" name="" id="occasion" onChange={(e) => {setOccasion(e.target.value)}}>
                        <option>Select occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                      </select>

                      <button type="submit" className='btn btn-sm btn-success mt-3' onClick={handleSubmit}>Submit reservation</button>
                    </div>
                </form>

                <table>
                  <tbody>
                    {
                      myList.time
                    }
                  </tbody>
                </table>
            </div>
    </div>
  )
}

export default BookingForm
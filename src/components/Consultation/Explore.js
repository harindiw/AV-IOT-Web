import React, { useState, useEffect } from 'react';

import logo2 from './logo2.png';
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import './Explore.css';

import MonthList from './MonthList';


export const Explore = () => {



  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMonthList, setShowMonthList] = useState(false);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  const getFebDays = (year) => {
      return isLeapYear(year) ? 29 : 28;
  }

  const generateCalendar = () => {
      const daysOfMonth = [31, getFebDays(currYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
      const today = new Date();
      const calendarDays = [];

      // Adjust the year and month for January to ensure correct calculation
      const adjustedYear = currMonth === 0 ? currYear - 1 : currYear;
      const adjustedMonth = currMonth === 0 ? 11 : currMonth - 1;
      const prevMonthDays = new Date(adjustedYear, adjustedMonth, 0).getDate();

      for (let i = firstDayOfMonth; i > 0; i--) {
          calendarDays.push(
              <div key={`empty-${i}`} className="empty-day">
                  {prevMonthDays - (firstDayOfMonth - i)}
              </div>
          );
      }

      for (let i = 1; i <= daysOfMonth[currMonth]; i++) {
          const isSelectedDay = today.getDate() === i && today.getMonth() === currMonth && today.getFullYear() === currYear;
          calendarDays.push(
              <div
                  key={`day-${i}`}
                  className={`calendar-day ${isSelectedDay ? 'selected' : ''}`}
                  onClick={() => handleDayClick(i)}
              >
                  {i}
              </div>
          );
      }


      return (
        <div className="calendar-days">
            {calendarDays}
        </div>
    );
}

const handlePrevYear = () => {
    setCurrYear(currYear - 1);
}

const handleNextYear = () => {
    setCurrYear(currYear + 1);
}

const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
}

const handleMonthClick = () => {
    setShowMonthList(!showMonthList);
}

const handleMonthSelection = (monthIndex) => {
    setCurrMonth(monthIndex);
    setShowMonthList(false);
}

const handleDayClick = (day) => {
    setCurrMonth(new Date().getMonth()); // Reset to current month
    setCurrYear(new Date().getFullYear()); // Reset to current year
    // Handle any other logic here based on the clicked day
}

// Function to automatically set the current date when the component mounts
useEffect(() => {
    const today = new Date();
    setCurrMonth(today.getMonth());
    setCurrYear(today.getFullYear());
}, []);




  return (
    <div className='explore'>
      <div class="m">
        <div class="row">
          <div class="col-sm">
            <img className="logo1" src={logo2} alt="" />
            {/* <h4>Explore working with AV IOT Solutions</h4><br></br> */}
            <div className='exdiv'>
            <br></br><h5><b><HiOutlineVideoCamera /></b>&emsp; 30 min</h5><br></br>
            <h5><b><FaRegClock /></b>&emsp; Web conferencing details provided upon confirmation.</h5>
            </div>
            
          </div>
          <div class="col-sm">
          
  <div class="contianer">
  <div class="formbold-main-wrapper">

  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-input-wrapp formbold-mb-3">
{/* name */}
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            class="formbold-form-input"
          />

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            class="formbold-form-input"
          />
        </div>
      </div>
{/* email */}
      <div class="formbold-mb-3">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          class="formbold-form-input"
        />
      </div>

      {/* Phone */}
      <div class="formbold-mb-3 formbold-input-wrapp">

        <div>
          
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            class="formbold-form-input"
          />
        </div>
      </div>

      {/* company */}
      <div class="formbold-mb-3">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="company name"
          class="formbold-form-input"
        />
      </div>

        {/* company */}
        <div class="formbold-mb-3">
        <input
          type="textarea"
          name="build"
          id="build"
          placeholder="What are you planning to build"
          class="formbold-form-input"
        />
      </div>

{/* data  */}
      <div class="formbold-mb-3">
        <input type="date" name="dob" id="dob" class="formbold-form-input" />
      </div>

      <div class="formbold-mb-3">
        <input type="time" name="time" id="time" class="formbold-form-input" />
      </div>





   

      <button class="formbold-btn">Submit</button>
    </form>
  </div>
</div>

  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
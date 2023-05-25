import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [price, setPrice] = useState(localStorage.getItem("price"));
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8080/requestform", {
      fullName: fullName,
      email: email,
      price: price,
      phoneNumber: phoneNumber,
      dob:dob,
      fromDate: fromDate,
      lastDate: lastDate,
      gender:gender,
      timeSlot:timeSlot,
      isApproved:false,
    })
    .then((res) => {
    navigate("/approved");
    });
    console.log('Form submitted!');
  };
  const handleStartDateChange = (e) => {
    setFromDate(e.target.value);
    const newEndDate = new Date(e.target.value);
    newEndDate.setMonth(newEndDate.getMonth() + parseInt(localStorage.getItem("duration")));
    setLastDate(newEndDate.toISOString().substr(0, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make an API call using axios with the selected start and end dates
    axios.get('/api/data', {
      params: {
        fromDate,
        lastDate
      }
    })
    .then(response => {
      // Handle the response from the server
      console.log(response.data);
    })
    .catch(error => {
      // Handle any error that occurred during the API call
      console.error(error);
    });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto my-8 p-4 bg-white shadow-md">
        <h1 className="text-2xl mb-4 font-bold">Form</h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dateRange">
            Date Range (From - To)
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fromDate"
              type="date"
              min={new Date().toISOString().split('T')[0]}
              max={(new Date().getMonth() + 1).toString()}
              value={fromDate}
              onChange={handleStartDateChange} 
            />
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastDate"
              type="date"
              min={fromDate}
              max={(new Date().getMonth() + 1).toString()}
              value={lastDate} disabled
              
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Price"
            value={price}
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">
            Gender:
          </label>
          <select
            id="gender"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="timeSlot" className="block mb-2">
            Time Slot:
          </label>
          <select
            id="timeSlot"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            disabled={gender === ''}
          >
            <option value="">Select time slot</option>
            {gender === 'male' && (
              <>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
              </>
            )}
            {gender === 'female' && (
              <>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </>
            )}
          </select>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={() => {navigate("/requestform")}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

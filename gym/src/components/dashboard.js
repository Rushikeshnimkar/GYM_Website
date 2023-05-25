import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      axios
        .get("http://localhost:8080/request")
        .then((response) => {
          console.log(response)
          setRequests(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [])
  

  const handleApprove = (id) => {
    axios.post(`http://localhost:8080/approve/${id}`).then((res)=>{
      console.log(res.data)
    }).catch((err)=> {console.log(err)})
    // // Logic to handle request approval
    // console.log(`Request ${id} approved`);
    // const apiUrl = '/send-email'; // Update with your server endpoint URL

    // // Request body data
    // const requestData = {
    //   recipientEmail: 'recipient@example.com', // Replace with the recipient's email address
    //   message: 'Your request has been approved.' // Customize the email message
    // };
  };

  const handleReject = (id) => {
    // fetch(`http://localhost:8080/delete/${id}`, {
    //   method: 'DELETE',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(`Request ${id} rejected`);
    //     // Fetch updated requests after deletion
    //   })
    //   .catch((error) => console.error(error));
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(() => {
        console.log(`Request ${id} rejected`);
      })
      .catch((error) => console.error(error));
  };


  return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold my-8">User Requests</h1>

    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Full Name</th>
          <th className="py-2 px-4 border">Email</th>
          <th className="py-2 px-4 border">Price</th>
          <th className="py-2 px-4 border">Phone Number</th>
          <th className="py-2 px-4 border">Date of Birth</th>
          <th className="py-2 px-4 border">From Date</th>
          <th className="py-2 px-4 border">Last Date</th>
          <th className="py-2 px-4 border">gender</th>
          <th className="py-2 px-4 border">timeSlot</th>
          <th className="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.id}>
            <td className="py-2 px-4 border">{request.fullname}</td>
            <td className="py-2 px-4 border">{request.email}</td>
            <td className="py-2 px-4 border">{request.price}</td>
            <td className="py-2 px-4 border">{request.phonenumber}</td>
            <td className="py-2 px-4 border">{request.dob}</td>
            <td className="py-2 px-4 border">{request.fromdate}</td>
            <td className="py-2 px-4 border">{request.lastdate}</td>
            <td className="py-2 px-4 border">{request.gender}</td>
            <td className="py-2 px-4 border">{request.timeSlot}</td>
            <td className="py-2 px-4 border">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleApprove(request.id)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleReject(request.id)}
              >
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default AdminPage;

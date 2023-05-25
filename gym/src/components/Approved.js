import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import axios from 'axios';

const ApprovalStatus = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [Requests, setRequests] = useState([])
  const [isRejected, setIsRejected] =useState(false);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/request/${localStorage.getItem("email")}`)
        .then((response) => {
          if (response.data == ""){
            setIsRejected(true)
          }else{
            setRequests(response.data);
            if (response.data[0].isApproved == true){
              setIsApproved(true)
            }else{
              setIsApproved(false)
            }  
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Transition
          show={!isApproved && !isRejected}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mb-4 text-2xl font-bold text-gray-800 text-5xl">
          <h1>Waiting for admin to approve</h1>
          </div>
        </Transition>
        <Transition
          show={isApproved}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mb-4 text-2xl font-bold text-gray-800 text-5xl">
            Request Approved
          </div>
        </Transition>
        <Transition
          show={isRejected}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mb-4 text-2xl font-bold text-gray-800 text-5xl">
            <h1>Request Rejected</h1>
          </div>
        </Transition>

      </div>
    </div>
  );
};

export default ApprovalStatus;

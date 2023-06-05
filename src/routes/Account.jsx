import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state) => state.user.user);

  return (
      <>
      <div className="flex justify-center items-center">
              <section className="bg-gray-150 mt-6 md:flex ml-5  ">
    <div className="flex flex-wrap">
    <div className="w-full  mb-4 md:ml-10 md:mr-5 ">
        <div className="bg-white border border-gray-200 rounded-lg shadow p-4 ml-5">
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-full mx-auto w-32"
            />
            <h5 className="my-3 text-lg font-medium">{user.name}</h5>
            <p className="text-gray-500 mb-1">{user.businessName}</p>
            <p className="text-gray-500">{user.country}, {user.state}, {user.city}</p>
          </div>
          <div className="flex justify-center mt-4">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit</button>
                </div>
            </div>
            
      </div>
      
        </div>
        <div className="  lg:w-1/2 mb-4  ">

        <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">My Referral ID:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.partnerId}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Business Category:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.Businesscate}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Business Name:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.businessName}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">ID Activated on:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.createdAt.split("T")[0]}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Full Name:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.name}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Email:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.email}</p>
                                  </div>
                                  </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Phone:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.phone}</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex mb-3">
            <div className="w-1/3">
              <p className="font-medium">Address:</p>
            </div>
            <div className="w-2/3">
              <p className="text-gray-500">{user.country}, {user.state}, {user.city}</p>
            </div>
          </div> 
          <hr className="my-3" />
          <div className="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            
          >
            Save
          </button>
          </div>
        </div>
      </div>
</section>
</div>
    </>
  );
};

export default Account;




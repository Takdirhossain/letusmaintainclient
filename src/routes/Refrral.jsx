import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Refrral = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const  [data, setData] = useState([])
  const [filter, setfilter] = useState([])
  useEffect(()=>  {
    fetch(`http://localhost:5000/auth/userrafferhistory/${user.partnerId}`)
    .then(res=>res.json())
    .then(data=> {setData(data)
       setfilter(data)})
  },[user])

const handalefilter = e => {
  const seletedvalue = e.target.value 
if (seletedvalue === "select"){
  setData(filter)
} else{
  const filterdata = data.filter(item => item.promices === seletedvalue)
  setData(filterdata)
}
 
 
 
 
  
}
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow p-4 ml-3 mr-3 mt-5">
        <h2 className="mb-4 text-xl font-medium">
          List of All Referrals Till Date
        </h2>

        <div className="flex mb-4">
          <div className="w-1/3">
            <p className="font-medium">Select Category:</p>
          </div>
          <div className="w-2/3">
           
            <select onChange={(e) => handalefilter(e)} className="form-select block w-full py-2 pl-3 pr-10 leading-5 bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option value="select">Select</option>
              {
              data?.map(item=> <option key={item._id} value={item.promices}>{item.promices}</option>)
            }
              
              
            </select>
          </div>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  Name of the lead
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  Solution Type
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  Category of Premises
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map(item => <tr key={item._id}>
                  <td className="border px-4 py-2">{item.date} </td>
                  <td className="border px-4 py-2">{item.lead}</td>
                  <td className="border px-4 py-2">{item.solution}</td>
                  <td className="border px-4 py-2">{item.promices}</td>
                </tr> )
              }
             
              
              
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Refrral;

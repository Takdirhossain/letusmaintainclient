import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Messgae = () => {
  const user = useSelector((state) => state.user.user);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/auth/message/${user.partnerId}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, [user]);
  return (
    <div className="flex justify-center ">
      {data?.map((item) => (
        <>
          <div key={item._id} className="border p-5 rounded">
            <p>Sended: {item?.createdAt}</p>
            <p>Message: {item?.message}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Messgae;

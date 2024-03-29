import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import shivam from "../assets/oterhs/WhatsApp_Image_2023-05-19_at_3.36.18_AM-removebg-preview.png"
import karin from "../assets/oterhs/WhatsApp Image 2023-05-19 at 3.32.52 AM.jpeg"
import reni from "../assets/oterhs/WhatsApp Image 2023-05-19 at 3.32.59 AM.jpeg"
const Management = () => {
  const styles = {
   
  };
  return (
    <div>
      <div style={styles}>
        <div className="bg-[#808080] ">
          <Nav />
        </div>

        <div className="w-2/3 m-auto mb-6">
          <h2 className="text-2xl md:text-4xl mt-6 md:mt-15 text-center font-bold text-gray-900">
            Lets Meet With Our Management{" "}
          </h2>
          <div className="flex flex-wrap justify-between mt-10 mb-10 gap-10">
            <div className="card w-full sm:w-96 bg-base-900 border-2 rounded-lg border-gray-900 shadow-xl mb-10 sm:mb-0">
              <img className="h-auto" src={shivam} alt="" />
              <div className="card-body">
                <h2 className="card-title">Mr. Shivam Kanojia</h2>
                <div className="badge badge-secondary">FOUNDER</div>
              </div>
            </div>
            <div className="card w-full sm:w-96 bg-base-100 border-2 rounded-lg border-gray-900 shadow-xl mb-10 sm:mb-0">
            <img src={karin} alt="" />
              <div className="card-body">
                <h2 className="card-title">Ms. Karin Sandalova</h2>
                <div className="badge badge-secondary">CO-FOUNDER</div>
              </div>
            </div>
            <div className="card w-full sm:w-96 bg-base-100 border-2 rounded-lg border-gray-900 shadow-xl mb-10 sm:mb-0 ">
            <img src={reni} alt="" />
              <div className="card-body">
                <h2 className="card-title">Mr. Reni Ninan</h2>
                <div className="badge badge-secondary">CO-FOUNDER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Management;

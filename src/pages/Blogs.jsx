import React from "react";
import blogimg from "../assets/oterhs/What-is-Integrated-Facility-Management.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const blogs = [
  {
    id: 1,
    title: "Unlocking the power of integrated facility management",
    body: "Santech Facility is a best-in-class integrated facility management system that offers a wide range of services to enhance your facility. From electrical and electronics to plumbing, carpentry, landscaping, FMO premises review, cleaning services, and computer maintenance, we cover it all. As a global maintenance service provider, Santech Facilities brings over 100 services right to your doorstep.  Whether you&#39;re an individual or a commercial business, we have tailored solutions and support for you. At Santech Facilities, our top priority is ensuring the smooth and efficient operation of your building&#39;s infrastructure and real estate. We place a strong emphasis on delivering unparalleled service through our team of skilled technicians and facility management experts. We strive to exceed your expectationsand provide you with exceptional maintenance services. Importance effective facility management for businesses. Facilities management is an important function in any organization that is responsible for the  maintenance and upkeep of buildings, equipment, and other assets. It involves a wide range of activities, including planning, design, construction, renovation, and operation of facilities. Effective facilities management is essential to ensure that buildings and equipment are safe, efficient, and reliable, and meet the needs of the people who use them. Here are some reasons why facilities management is important: Cost savings: Facilities management can help organizations reduce costs by ensuring that buildings and equipment are maintained in good condition and operate efficiently. This can reduce energy consumption, repair costs, and downtime, leading to significant savings over time. Safety: Facilities management plays a key role in ensuring that buildings and equipment are safe for employees and visitors. This includes maintaining fire safety systems, ensuring proper ventilation, and regularly inspecting and maintaining equipment. Compliance: Facilities management is responsible for ensuring that buildings and equipment comply with relevant regulations and standards. This can include building codes, health and safety regulations, and environmental regulations. Asset management: Facilities management is responsible for managing the lifecycle of assets, including maintenance, repairs, and replacement. This can help organizations maximize the value of their assets and ensure that they are used efficiently. Productivity: Facilities management can improve productivity by providing a safe, comfortable, and efficient working environment. This can include ensuring that buildings are properly heated, cooled, and ventilated, and that equipment is maintained in good condition. Overall, facilities management is important for ensuring that organizations can operate effectively andefficiently, while also ensuring the safety and well-being of employees and visitors.",
  },
];

const Blogs = () => {
  return (
    <div>
       <div className="bg-blue-200">
       <Nav/>
       </div>
   <div className="w-2/3 m-auto pt-20 pb-20">
   <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="" src={blogimg} alt="Album" />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">Unlocking the power of integrated facility management</h2>
          <p>Santech Facility is a best-in-class integrated facility management system that offers a wide range of
services to enhance your facility. From electrical and electronics to plumbing, carpentry, landscaping,
FMO premises review, cleaning services, and computer maintenance, we cover it all. As a global
maintenance service provider, Santech Facilities brings over 100 services right to your doorstep.
Whether you&#39;re an individual or a commercial business, we have tailored solutions and support for you.</p>
<p>
At Santech Facilities, our top priority is ensuring the smooth and efficient operation of your building&#39;s
infrastructure and real estate. We place a strong emphasis on delivering unparalleled service through
our team of skilled technicians and facility management experts. We strive to exceed your expectations
and provide you with exceptional maintenance services ........
</p>
          <div className="card-actions justify-end">
           <Link to="/blog/01"> <button className="btn btn-primary">Read More</button></Link>
          </div>
        </div>
      </div>
   </div>
   <Footer/>
    </div>
  );
};

export default Blogs;

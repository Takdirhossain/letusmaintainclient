import { useEffect, useState } from "react";
import "../style/style.css";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Loading from "../components/Loading";
import stripe from "../assets/oterhs/stripe.png"
import paypal from "../assets/oterhs/paypal.png"
import razorpay from "../assets/oterhs/razorpay.png"
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { loadStripe } from "@stripe/stripe-js";



const packagePrices = {
  Asia: {
    India: "INR 9999",
    Turkey: "TRY 7499",
    Thailand: "THB 17500",
    Singapore: "SGD 1099",
    UAE: "Aed 4900 ",
    Hong_Kong: "HKD 6900",
  },
  North_America: {
    Canada: "CAD 1200",
    USA: "USD 1350 ",
  },
  Europe: {
    UK: "GBP",
    Germany: "EUR 950",
    France: "EUR 950",
    Italy: "EUR 950 ",
    Netherlands: "EUR 950 ",
    Ireland: "EUR 950 ",
    Switzerland: "CHF",
    Poland: "PLN",
    Belgium: "EUR 950 ",
    Portugal: "EUR 950 ",
    Spain: "EUR 950 ",
    Slovakia: "SKK",
    Greece: "EUR 950 ",
    Austria: "EUR 950 ",
    Hungary: "HUF ",
    Czech_Republic: "CZK",
    Serbia: "RSD",
    Denmark: "DKK",
    Sweden: "SEK",
    Norway: "NOK",
    Lithuania: "LTL",
    Romania: "RON",
  },
};

const stripePromise = loadStripe(
  "pk_test_51N5av4SAHh9BgXprDapq9Dd6BdAcYhDER1IJgVvQybnIK1QeuGOoeJSIcp8bQ0IsDgZHTPshbljULvRPbqc5qBnX009i7KbQwO"
);
const CountryPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPackagePrice, setSelectedPackagePrice] = useState("");
  const [gender, setGender] = useState("");

  const [distance, setDistance] = useState("");

  const [paymment, setpayment] = useState(false);
  const [phone, setPhone] = useState("");
  const [captcha, setcaptcha] = useState(false);
  const [captchaerror, setCaptchaerror] = useState("");
  const [loading, setLoading] = useState(false);
 
  const handleRegionSelection = (e) => {
    const selectregion = e.target.value;
    setSelectedRegion(selectregion);
    setSelectedCountry("");
    setSelectedPackagePrice("");
  };

  const onChange = () => {
    setcaptcha(true);
    setCaptchaerror("");
  };

  const handleCountrySelection = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedPackagePrice(packagePrices[selectedRegion][country]);
  };

  const handleOnChange = (value) => {
    setPhone(value);
  };

  const handalerazorpay = (formData) => {
    const data = {
      name: formData.name,
      email: formData.email,
      amount: formData.packagePrices,
      currency: formData.currency,
      fulladdress: formData.fulladdress,
      password: formData.password,
      distance: formData.distance,
      permission: formData.permission,
    };
    axios
      .post("http://localhost:5000/order", data)
      .then((res) => {
        handalerazorpay(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const handalerazorpay = (data) => {
      const options = {
        key: "rzp_test_WjQrOkgltnhkbY",
        amount: parseInt(data?.amount) * 100,
        currency: data?.currency,
        order_id: data?.id,
        name: "LETUSMAINTAIN.COM",
        image: "https://i.ibb.co/gZ3JXLC/letus.png",
        description: "Welcome to letusmaintain.com happy to see you here",
        handler: function (response) {
          const anotherdata = {
            name: "takdir"
          }
       axios.post("http://localhost:5000/another", anotherdata)  
        }
       
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };

  const handalestripe = async (formData) => {
    const data = {
      name: formData.name,
      email: formData.email,
      amount: formData.packagePrices,
      currency: formData.currency,
      fulladdress: formData.fulladdress,
      password: formData.password,
      distance: formData.distance,
      permission: formData.permission,
    };
  
    try {
      const response = await fetch("http://localhost:5000/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const session = await response.json();
      console.log(session);
  
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
  
      if (result.error) {
        throw new Error(result.error.message);
      } else {
        // Handle successful payment
        
  
        // Do something after successful payment and the second request
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };
  
  const handalepaypal = (formData) => {
    console.log(formData);
  };

  const handalesubmit = (e) => {
    e.preventDefault();

    const fulladdress = e.target.fulladdress.value;
    const password = e.target.password.value;
    const name = e.target.full_name.value;
    const email = e.target.emailaddress.value;
    const packagePrices = selectedPackagePrice;
  const distance = e.target.distance.value
  const permission = e.target.gender.value
    const currencyprice = packagePrices.split(" ");

    const formData = {
      distance: distance,
      permission: permission,
      name: name,
      email: email,
      password: password,
      packagePrices: currencyprice[1],
      currency: currencyprice[0].toLowerCase(),
      fulladdress: fulladdress,
    };
    
    setpayment(true);
    Swal.fire({
      title: "Select A Payment Method",
      html: `<button  margin-right:10px;"  class="modal-button" id="razorpay"> <img src=${razorpay} alt="Razor Pay" class="button-image"> </button> 
      <button class="modal-stripe" id="stripe"><img src=${stripe} alt="Razor Pay" class="button-image"></button>
      <button class="modal-paypal" id="paypal"><img src=${paypal} alt="Razor Pay" class="button-image"></button>`,
      didOpen: () => {
        document
          .getElementById("razorpay")
          .addEventListener("click", () => handalerazorpay(formData));
        document
          .getElementById("stripe")
          .addEventListener("click", () => handalestripe(formData));
        document
          .getElementById("paypal")
          .addEventListener("click", () => handalepaypal(formData));
      },
    });
  };
  return (
    <div>
      <style>
        {`
          .modal-button {
           
           
            
            margin-right:10px;
          }
          .modal-paypal {
          
           
           
          }
          .modal-stripe {
         
            margin-right:10px;
           
            cursor: pointer;
           
          }
          
          .button-image {
            width: 150px; 
            height: 100px; 
           
          }
        `}
      </style>
      <div>
        <img
          className="relative lg:block h-[1700px] md:h-[1400px] "
          src="https://www.advanceecomsolutions.com/wp-content/uploads/2022/10/became-a-partner.jpg"
          alt=""
        />
        <div className="absolute top-0">
          <Nav type="enterprice" />
        </div>
        <div className=" lg:w-8/12 m-auto ">
          <div class="min-h-screen absolute top-32  flex ml-0 lg:ml-20">
            <div class="container max-w-screen-lg ">
              <div className="">
                <div className="block justify-between items-center">
                  <h2 class="font-semibold text-xl text-center mb-5  text-white">
                    Please Fill in the below details{" "}
                  </h2>
                </div>

                <div class="bg-[#fff]  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                  <div class="grid  gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <form onSubmit={handalesubmit} class="lg:col-span-3 ">
                      <div class="grid gap-4 gap-y-5 text-sm grid-cols-1 ">
                        <div class="md:col-span-4">
                          <label for="full_name">Full Name*</label>
                          <input
                            required
                            placeholder="Jhone Die"
                            type="text"
                            name="full_name"
                            id="full_name"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          />
                        </div>

                        <div class="md:col-span-4">
                          <label for="email">Email Address*</label>
                          <input
                            required
                            type="email"
                            name="emailaddress"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="email@domain.com"
                          />
                        </div>
                        <div class="md:col-span-4">
                          <label>Set A Password*</label>
                          <input
                            required
                            type="text"
                            name="password"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Your Business name"
                          />
                        </div>
                        <div class="md:col-span-4">
                          <label for="email">Your Full Address*</label>
                          <input
                            required
                            type="text"
                            name="fulladdress"
                            id="email"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder="Jerry Seinfeld Apartment 5A 129 West 81st Street"
                          />
                        </div>

                        <div class="md:col-span-3">
                          <label for="address">Permission Type : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="Apartment"
                            name="gender"
                            value="Apartment"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Apartment"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            Apartment
                          </label>
                          <input
                            type="radio"
                            id="House"
                            name="gender"
                            className="ml-5"
                            value="House"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "House"}
                          />
                          <label className="ml-2" htmlFor="House">
                            House/Villa
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            className="ml-5"
                            value="Farm"
                            onChange={(e) => setGender(e.target.value)}
                            checked={gender === "Farm"}
                          />
                          <label className="ml-2" htmlFor="">
                            Farm House
                          </label>
                        </div>
                        <div class="md:col-span-4 ">
                          <label for="address">Distance from Center : </label>
                          <input
                            type="radio"
                            className="ml-5"
                            id="5km"
                            name="distance"
                            value="5km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "5km"}
                          />
                          <label className="ml-2" htmlFor="Apartment">
                            With In 5km
                          </label>
                          <input
                            type="radio"
                            id="10km"
                            name="distance"
                            className="ml-5"
                            value="10km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "10km"}
                          />
                          <label className="ml-2" htmlFor="House">
                            10KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="20km"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "20km"}
                          />
                          <label className="ml-2" htmlFor="">
                            20KM
                          </label>
                          <input
                            type="radio"
                            id="other"
                            name="distance"
                            className="ml-5"
                            value="above20"
                            onChange={(e) => setDistance(e.target.value)}
                            checked={distance === "above20"}
                          />
                          <label className="ml-2" htmlFor="">
                            Above 20KM
                          </label>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Have Reffer Code?</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input
                              type="text"
                              name="zip"
                              id="email"
                              class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2 z-10 ">
                          <label for="country">Phone Number </label>
                          <div class="h-9 flex border  items-center mt-1">
                            <PhoneInput
                              inputStyle={{
                                border: "none",
                                background: "transparent",
                              }}
                              value={phone}
                              onChange={handleOnChange}
                              country={"in"}
                            />
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Select Region*</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <select
                              required
                              onClick={(e) => handleRegionSelection(e)}
                              name="country"
                              className="focus:outline-none w-full bg-transparent"
                              id=""
                            >
                              {Object.keys(packagePrices).map((region) => (
                                <option key={region} value={region}>
                                  {region}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Country*</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            {selectedRegion && (
                              <>
                                <select
                                  className="focus:outline-none w-full bg-transparent"
                                  onClick={(e) => handleCountrySelection(e)}
                                >
                                  {Object.keys(
                                    packagePrices[selectedRegion]
                                  ).map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}
                                </select>
                              </>
                            )}
                          </div>
                        </div>

                        <div class="md:col-span-5 z-0">
                          <label for="country">Services in Package: </label>
                          <div class=" ">
                            <div className="overflow-x-auto w-full">
                              <table className="table w-full">
                                {/* head */}
                                <thead>
                                  <tr>
                                    <th> Type of Services </th>
                                    <th>Number Of Visits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* row 1 */}
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Hart Hagerty
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      18
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Plumbing Maintenance
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      10
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Computer System Maintenance
                                            (Hardware & Software){" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      8
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Carpenter Services
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      6
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            F.M.O Review{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      Half Yearly Site Audit
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="flex items-center space-x-3">
                                        <div>
                                          <div className="font-bold">
                                            Yearly Fee
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="mt-5 sm:mt-10 -mb-5 sm:-mb-20">
                                      <h2 className="text-xl sm:text-2xl w-40 font-bold bg-[#00ff00] pl-5 pt-2 pb-2 text-white rounded">
                                        {selectedPackagePrice
                                          ? selectedPackagePrice
                                          : " "}
                                      </h2>
                                      <br />
                                    </td>
                                  </tr>
                                </tbody>
                                {/* foot */}
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <ReCAPTCHA
                            sitekey="6LeM1swlAAAAABoXDNzY-heV1SEr_IF1dXRGoBOD"
                            required
                            onChange={onChange}
                          />
                          <p className="text-red-600">{captchaerror}</p>
                        </div>

                        <div class="md:col-span-5 text-center">
                          <div class="">
                            <button class="bg-[#0000FF] hover:bg-blue-700 text-[#fff] font-bold p-4  rounded">
                              {loading ? (
                                <Loading />
                              ) : (
                                <>
                                  <span> Subscribe now </span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CountryPackages;

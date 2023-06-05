import React, { useState } from "react";

function BankTransfer() {
  const handalesubmit = e => {
    e.preventDefault()
    const accountHolderName = e.target.accountHolderName.value 
    const accountNumber = e.target.accountNumber.value 
    const bankName = e.target.bankName.value 
    const youraddress = e.target.youraddress.value 
    const swiftCode = e.target.swiftCode.value 
    const ifscCode = e.target.ifscCode.value 
    const mobileNumber = e.target.mobileNumber.value 
    const bankaddress = e.target.bankaddress.value 
    
    
   console.log(accountHolderName, accountNumber,  bankName, youraddress, swiftCode, ifscCode, mobileNumber, bankaddress);
    
  }
  return (
    <>
      <div className="flex-wrap  mx-auto mt-2">
        <form onSubmit={handalesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div className="col-span-1 shadow rounded-md p-6">
            <label
              className="block font-medium mb-2"
             
            >
              Name of the Account Holder
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="accountHolderName"
              type="text"
              placeholder="John Doe"
            />
            <label className="block font-medium mb-2">
              Account Number
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="accountNumber"
              type="text"
              placeholder="123456789"
            />
            <label className="block font-medium mb-2" htmlFor="bankName">
              Bank Name
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="bankName"
              type="text"
              placeholder="DBS Bank"
            />
            <label className="block font-medium mb-2" htmlFor="bankAddress">
              Bank Address
            </label>
            <textarea
              className="form-textarea mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="bankaddress"
              rows={2}
              placeholder="123 Main St, Anytown, Singapore 12345"
              defaultValue={""}
            ></textarea>
          </div>
          <div className="col-span-1 shadow rounded-md p-6">
            <label className="block font-medium mb-2" htmlFor="swiftCode">
              SWIFT Code
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="swiftCode"
              type="text"
              placeholder="ABCD1234EFG"
            />
            <label className="block font-medium mb-2" htmlFor="ifscCode">
              IFSC Code [If not then ignore]
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="ifscCode"
              type="text"
              placeholder="ABCD1234567"
            />
            <label className="block font-medium mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="form-input mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="mobileNumber"
              type="text"
              placeholder="9876543210"
            />
            <label className="block font-medium mb-2" htmlFor="address">
              Your Address
            </label>
            <textarea
              className="form-textarea mb-2 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:shadow-outline-indigo"
              name="youraddress"
              rows={2}
              placeholder="123 Main St, Anytown, Singapore 12345"
              defaultValue={""}
            ></textarea>
          </div>
          <button className="bg-blue-600 text-white font-bold rounded-xl p-5">Save</button>
        </form>

       
      </div>
    </>
  );
}

function Paypal() {
  return (
    <div className="md:mt-6 mx-auto mt-6 ">
      <div className="w-full md:w-1/2 px-6 mb-4 shadow rounded-md p-6  ">
        <label
          className="block  font-medium mb-2 text-center mt-2"
          htmlFor="paypalDetails"
        >
          PayPal Details
        </label>
        <input
          className="w-full border rounded py-2 px-6 leading-tight focus:outline-none focus:shadow-outline"
          id="paypalDetails"
          type="text"
          placeholder="Enter the PayPal Details"
        />
        <div className="text-center mt-3">
          <button
            type="submit"
            class="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentLink() {
  return (
    <div className="md:mt-6 mx-auto mt-6">
      <div className="w-full md:w-1/2 px-6 mb-4 shadow rounded-md p-6">
        <label
          className="block text-center font-medium mb-2 mt-2"
          htmlFor="paymentLink"
        >
          Payment Link
        </label>
        <input
          className="w-full border rounded py-2 px-6 leading-tight focus:outline-none focus:shadow-outline"
          id="paymentLink"
          type="text"
          placeholder="Enter the Payment Link"
        />
        <div className="text-center mt-3">
          <button
            type="submit"
            class="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

const Payout = () => {
  const [isBankTransferChecked, setIsBankTransferChecked] = useState(false);
  const [isPayPalChecked, setIsPayPalChecked] = useState(false);
  const [isPaymentLinkChecked, setIsPaymentLinkChecked] = useState(false);

  function handleBankTransferChange() {
    setIsBankTransferChecked(true);
    setIsPayPalChecked(false);
    setIsPaymentLinkChecked(false);
  }

  function handlePaypalChange() {
    setIsBankTransferChecked(false);
    setIsPayPalChecked(true);
    setIsPaymentLinkChecked(false);
  }

  function handlePaymentLinkChange() {
    setIsBankTransferChecked(false);
    setIsPayPalChecked(false);
    setIsPaymentLinkChecked(true);
  }

  return (
    <>
      <h1 class="text-3xl font-bold mb-2 mt-2  text-center ">
        Update Transfer Mode
      </h1>
      <h1 class="text-xl font-bold mb-1  text-center ">
        Select any one of them:
      </h1>

      <div className=" flex justify-between mt-6 ">
        <div className="flex mx-auto items-center   border border-gray-400 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            defaultValue=""
            checked={isBankTransferChecked}
            onChange={handleBankTransferChange}
            name="bordered-checkbox"
            className="w-4 ml-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bank Transfer
          </label>

          <input
            defaultChecked=""
            id="bordered-checkbox-2"
            type="checkbox"
            defaultValue=""
            checked={isPayPalChecked}
            onChange={handlePaypalChange}
            name="bordered-checkbox"
            className="w-4 ml-6 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-2"
            className=" py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            PayPal
          </label>
          <input
            defaultChecked=""
            id="bordered-checkbox-2"
            type="checkbox"
            defaultValue=""
            checked={isPaymentLinkChecked}
            onChange={handlePaymentLinkChange}
            name="bordered-checkbox"
            className="w-4 h-4 ml-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-2"
            className=" py-4 ml-2 mr-5 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Payment Link
          </label>
        </div>
      </div>
      <div className="flex">
        {isBankTransferChecked && BankTransfer()}
        {isPayPalChecked && Paypal()}
        {isPaymentLinkChecked && PaymentLink()}
      </div>
    </>
  );
};

export default Payout;

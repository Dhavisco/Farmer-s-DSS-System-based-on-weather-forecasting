// import { Line, Bar } from 'react-chartjs-2';
import img from "../../public/assets/icons/wind.svg";

import Header from "../layout/Header";
import { useState } from "react";

const MessageAlert = (onSubmit) => {
  const page = "Alert";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <>
      <Header page={page} />

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto my-2 p-4 fade-in bg-white shadow-md  rounded"
      >
        <div className="lg:flex items-center justify-between">
          <div className="text-2xl text-[#00000059] flex items-center font-bold mb-4">
            <span>Weather Alert Signup</span>{" "}
            <img src={img} className="h-7 w-7 ml-1" />
          </div>
          <div className="text-xs italic text-[#000000ce] font-medium">
            Coming Soon...
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 text-black bg-[#0f3828] border-2 border-black hover:bg-[#0f3828] font-semibold rounded"
        >
          Sign Up for Alerts
        </button>
      </form>
    </>
  );
};

export default MessageAlert;

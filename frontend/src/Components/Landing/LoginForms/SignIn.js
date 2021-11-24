import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const accountCheck = async () => {
    const userList = await axios.get("/api/users");
    console.log(userList.data);
    userList.data.forEach((user) => {
      if (user.email === email && user.password === password) {
        sessionStorage.setItem("currentUserId", user._id);
        navigate("/home");
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <input
          type="email"
          name="mobile-or-email"
          id="mobile-or-email"
          autoComplete="email"
          value={email}
          onChange={emailChange}
          placeholder="Enter your email"
          required
          className="block w-full shadow-sm focus:ring-primary  focus:border-primary  sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={passwordChange}
          placeholder="Password"
          autoComplete="current-password"
          required
          className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div>
        <button
          onClick={accountCheck}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryLight"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

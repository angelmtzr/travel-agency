import React from "react";
import { useState } from "react";
import axios from "axios";
export default function CreateAccount() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const onSubmit = () => {
    const newUser = {
      username: userName,
      password: password,
      email: email,
    };
    axios.post("/api/users", newUser);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="name" className="sr-only">
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={userName}
          onChange={userChange}
          autoComplete="name"
          placeholder="Username"
          required
          className="block w-full shadow-sm focus:ring-primary  focus:border-primary  sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="mobile-or-email" className="sr-only">
          Mobile number or email
        </label>
        <input
          type="text"
          name="mobile-or-email"
          id="mobile-or-email"
          value={email}
          onChange={emailChange}
          autoComplete="email"
          placeholder="Email"
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
          className="block w-full shadow-sm focus:ring-primary  focus:border-primary  sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div>
        <a
          href="/Login"
          onClick={onSubmit}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryLight"
        >
          Create your accounts
        </a>
      </div>
    </div>
  );
}

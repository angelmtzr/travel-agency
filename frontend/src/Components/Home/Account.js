/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
export default function Account() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const onSave = () => {
    const userID = sessionStorage.getItem("currentUserId");
    const updateUser = {
      username: userName,
      password: password,
      email: email,
    };
    axios.put("/api/users/" + userID, updateUser);
  };
  return (
    <div className="bg-gray-900 h-screen">
      <NavBar />
      <div className="flex justify-center">
        <div class="mt-10 sm:mt-0">
          <div class="mt-10">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div>
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-5">
                        <h1 className="text-3xl font-bold">Personal Account</h1>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          value={userName}
                          onChange={userChange}
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="last-name"
                          value={password}
                          onChange={passwordChange}
                          id="last-name"
                          autocomplete="family-name"
                          class="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-5">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={email}
                          onChange={emailChange}
                          id="email-address"
                          autocomplete="email"
                          class="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={onSave}
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryDark hover:bg-primaryLight hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

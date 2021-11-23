import React from 'react'

export default function CreateAccount() {
    return (
        <form action="#" method="POST" className="space-y-6">
                        <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
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
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-primary  focus:border-primary  sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <a
                            href="/home"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryLight"
                          >
                            Create your account
                          </a>
                        </div>
                      </form>
    )
}

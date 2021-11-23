import React from 'react'

export default function SignIn() {
    return (
        <form action="#" method="POST" className="space-y-6">
                        <div>
                          <input
                            type="email"
                            name="mobile-or-email"
                            id="mobile-or-email"
                            autoComplete="email"
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
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryDark hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryLight"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
    )
}

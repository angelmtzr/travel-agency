
import { Popover } from '@headlessui/react'

import { ChevronRightIcon } from '@heroicons/react/solid'
import bookingBro from '../../static/bookingBro.svg';
import planeLogo from '../../static/planeLogo.svg'
import CreateAccount from './LoginForms/CreateAccount';
import SignIn from './LoginForms/SignIn';
import { useState } from 'react';
 


export default function Login() {
    const [form, setform] = useState(true)
    const toggleForms = () => setform(!form)
  return (
    <div id="login" className="relative bg-gray-800 overflow-hidden h-screen">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                
                
              </div>
              
            </div>
            <div className="hidden md:flex">
              
            </div>
          </nav>

          
        </Popover>

        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex">
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-primaryDark rounded-full">
                      Start your experience!
                    </span>
                    <span className="ml-4 text-sm">Log in with us.</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <div className="mt-20">
                  <img
                    className="w-full lg:h-full lg:w-auto lg:w-96"
                    src={bookingBro}
                    alt=""
                  />
                  </div>
                  
                  
                  
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                  <div className="flex items-center justify-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div>
                  
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={planeLogo}
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-10 font-extrabold text-3xl flex">
                  TravelExpert <span className="text-primary">.</span>
               </div>
            </div>

                    <div className="mt-6 relative">
                      <div className="flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="mt-3 flex justify-center font-semibold text-lg">
                        {!form? <p>Sign in</p> : <p>Create Account</p>}
                      </div>
                    </div>

                    <div className="mt-6">
                    {form ?
                        <CreateAccount/> 
                         :
                        <SignIn/> 
                    }
                    </div>
                    <div className="mt-4">
                            <p className="text-sm text-center text-gray-600 font-semibold flex justify-center space-x-2">{form? <p>Already have an account?</p> : <p>Do not have an account?</p>}
                            <button onClick={toggleForms} className="underline text-primary cursos-pointer">{form? <p>Sign in</p> : <p>Create Account</p>}</button></p>
                        </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

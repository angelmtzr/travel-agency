
import { Popover} from '@headlessui/react'
import planeLogo from '../../static/planeLogo.svg'
import landing from '../../static/landing.svg'
import { HashLink as Link } from 'react-router-hash-link';

export default function LandingHero() {
  return (
    <div className="relative overflow-hidde ">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 py-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div>
                  
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={planeLogo}
                    alt=""
                  />
                </div>
              </div>
              <div className="ml-10 font-extrabold text-white text-3xl flex">
                  TravelExpert <span className="text-primary">.</span>
               </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              
              <Link
                smooth to="/Login#login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primaryDark hover:bg-gray-700"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>

        
      </Popover>

      <main>
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Travel like you</span>
                    <span className="block text-primary">have never before</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    The best and simplest way to book your trip is here. Don't worry about the details, we take care of it just for you to get there!
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="text-xl font-extrabold text-gray-300" >
                        <div className="min-w-0 flex-1">
                          <p >Your next <span className="text-primary">destination</span> is waiting for <span className="text-primary">you</span>.</p>
                        </div>
                        <p>Dont waste time, <button type="submit" className="underline cursor-pointer text-primary font-extrabold">Get started</button></p>
                        
                      </div>         
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={landing}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </main>
    </div>
  )
}
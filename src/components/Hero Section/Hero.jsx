
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Hero() {

    return (
        <>
        <div className="">
      <header className="" x-data="{expanded: false}">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link href="/" title="" className="flex">
             
              </Link>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-gray-900" click="expanded = !expanded" >
                <span x-show="!expanded" aria-hidden="true">
                
                </span>

                <span x-show="expanded" aria-hidden="true">
                 
                  
                </span>
              </button>
            </div>

        
          </nav> 
        </div>
      </header>

      <section className="pt-12 bg-gradient-to-tr from-[#6cbbb4] to-[#9089fc]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Hey 👋"Crafting Exceptional Online Experiences with Innovation and Expertise"
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.
              </p>
              <div className="relative inline-flex mt-9 group">
                <div
                  className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                </div>

                <Link href="#" title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button">
                  Read Exclusive Blog
                </Link>
              </div>
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Latest Picks
              </p>

              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png" alt=""/>
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href="#" title="">
                        How a visual artist redefines success in graphic design
                        <span className="absolute inset-0" aria-hidden="true"></span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" alt=""/>
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href="#" title="">
                        How a visual artist redefines success in graphic design
                        <span className="absolute inset-0" aria-hidden="true"></span>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" alt=""/>
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <Link href="#" title="">
                        How a visual artist redefines success in graphic design
                        <span className="absolute inset-0" aria-hidden="true"></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end lg:col-span-5">
              <img className="w-full mx-auto" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </div>
    

    </>
    )
  
}

export default Hero
'use client'

function Card1() {
    return (
        <>
            <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 mx-4 md:mt-7 md:mx-16">

             <div className=" p-6 mx-2 w-full bg-[#fef9f0] rounded-2xl">
               <div className="text-center flex w-44">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-center  ml-1 md:ml-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
               </svg>
          
               <span className="ml-7 text-[#c0cacd]">Orders</span>
                </div>
                <span className="md:ml-20 mt-3 ml-14 font-bold md:text-2xl">1500</span>
                <span className="md:-mr-28 md:mt-16 font-bold text-[#00dd3b] lg:mx-1">12.23%</span>

              </div>

              <div className=" p-6 mx-2 w-full bg-[#ecf8e7] rounded-2xl">
               <div className="text-center flex w-44">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-center  ml-1 md:ml-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
               </svg>
          
               <span className="ml-7 text-[#c0cacd]">Quote</span>
                </div>
                <span className="md:ml-20 mt-3 ml-14 font-bold md:text-2xl">150</span>
                <span className="md:-mr-28 md:mt-16 font-bold text-[#00dd3b] lg:mx-1">12.23%</span>

              </div>

              <div className=" p-6 mx-2 w-full bg-[#e4eef1] rounded-2xl">
               <div className="text-center flex w-44">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-center  ml-1 md:ml-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                 
          
               <span className="ml-7 text-[#c0cacd]">Saving</span>
                </div>
                <span className="md:ml-20 mt-3 ml-14 font-bold md:text-2xl ">₹30,000</span>
                <span className="md:-mr-28 md:mt-16 font-bold text-[#d63143] lg:mx-1">12.3%</span>

              </div>

              <div className=" p-4 md:p-6 mx-2  w-full bg-[#fcece4] rounded-2xl mt-3">
               <div className="text-center flex w-44">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-center  -ml-1 md:ml-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
               </svg>
          
               <span className="ml-2 md:ml-7 text-[#c0cacd]">Purchased</span>
                </div>
                <span className=" md:ml-20 mt-3 ml-8 font-bold md:text-2xl text--1xl">₹1,30,000</span>
                <span className="md:-mr-28 md:mt-16 font-bold text-[#d63143] lg:mx-1">12.23%</span>

              </div>

            </div>
        </>
    )
}

export function Card(){
    return (
        <>
            <div className="p-5 grid grid-cols-2 gap-2">
                <div className="bg-orange-300">
                      <p>
                        Order
                      </p>
                </div>

                <div className="bg-orange-300">
                      <p>
                        Order
                      </p>
                </div>
            </div>
        </>
    )
}
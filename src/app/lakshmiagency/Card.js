'use client'

 export function Card(){
    return(
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="w-full  p-8 text-center">
           <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-500 font-extrabold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

              <h1 className="text-1xl text-left ml-2 mt-1 font-bold">Orders </h1>  
           </div>
        </div>

        <div class="px-3 py-0 ml-6 flex">
          <p class="text-black mb-1">1500</p>
          <p class="text-black mb-1 ml-4">1500</p>

        </div>
    </div>


    
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div className="flex">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        </div>

        <div className="ml-4">
           <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white float-right">Orders</h5>
           <p class=" font-normal text-gray-500 dark:text-gray-400">1500</p>
            <p class=" font-normal text-gray-500 dark:text-gray-400">1500</p>
        </div>
        
    </div>
   
    <div className="flex">
            
    </div>


 
</div>



    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="w-full  p-8 text-center">
           <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-500 font-extrabold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

              <h1 className="text-1xl text-left ml-2 mt-1 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, facere </h1>  
           </div>
        </div>

        <div class="px-10 py-0 ml-6">
          <p class="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
    </div>


    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <div className="w-full  p-8 text-center">
           <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-blue-500 font-extrabold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

              <h1 className="text-1xl text-left ml-2 mt-1 font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, facere </h1>  
           </div>
        </div>

        <div class="px-10 py-0 ml-6">
          <p class="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
    </div>


             

        </div>
        </>
    )
 }
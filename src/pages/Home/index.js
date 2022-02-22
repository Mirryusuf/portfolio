import React from 'react'
import Sidebar from '../../components/Sidebar'

function Home() {
    return (
        <div className="grid grid-cols-12 gap-6 px-5 py-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
          <div className="shadow-2xl h-full col-span-12 p-4 text-base text-center border lg:col-span-3 rounded-2xl shadow-custom-light">
            <Sidebar />
          </div>
          <div className="shadow-2xl lg:col-span-9 border rounded-2xl col-span-12">
            <div className='flex-grow'>
              <p className='px-5 pt-5 tracking-wide text-xl font-bold'>About Me</p>
              <div className=''>
                  <p className='px-5 py-5 tracking-wide font-medium'>Hello, my name is Muhamad Amir Rudin Yusup, my friends call me Yusuf or Amir, I am a software engineering graduate from SMK Telkom Jakarta and I like coding and new technologies, creative, great contributor, proficient in Web Development and Software Engineering.</p>
              </div>
              <div className='px-5 py-5 mt-5 bg-gray-300'>
                  <p className='text-xl font-bold tracking-wide'>What I am doing</p>
                  <div className='py-3 grid gap-6 lg:grid-cols-2'>
                    <div className='rounded-lg bg-gray-100 lg:col-span-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>
                        <div className='p-3 -tracking-wide'>
                          <p className='font-bold mb-2'>Frontend Development</p>
                          <p>I can build a beautiful and scalable SPA using </p><span className='font-semibold'>HTML,CSS</span> and <span className='font-semibold'>React.js</span>
                        </div>
                    </div>
                    <div className='rounded-lg bg-gray-100 lg:col-span-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>
                        <div className='p-3 -tracking-wide'>
                          <p className='font-bold mb-2'>Backend Development</p>
                          <p>Handle database, server, api using </p><span className='font-semibold'>Express</span> and other popular frameworks
                        </div>
                    </div>
                    <div className='rounded-lg bg-gray-100 lg:col-span-1 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl'>
                        <div className='p-3 -tracking-wide'>
                          <p className='font-bold mb-2'>API Development</p>
                          <p>I can develop robust REST API using </p><span className='font-semibold'>Node API</span>
                        </div>
                    </div>
                  </div>
              </div>

              <div className='px-5 py-5 bg-gray-400'>
                  <p className='text-xl font-bold tracking-wide'>Projects</p>
                  <div className='py-3 grid gap-6 lg:grid-cols-2'>
                    <div class="lg:col-span-1 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                      <a href='https://github.com/Mirryusuf/Mirresi' target="_blank">
                        <img class="h-40 object-cover rounded-xl" src="./4.png" alt="" />
                      </a>
                      <div class="p-2">                      
                        <h2 class="font-bold text-lg text-center">Mirresi</h2>
                      </div>
                    </div>
                    <div class="lg:col-span-1 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                      <a href='https://github.com/Mirryusuf/be-food-store' target="_blank">
                        <img class="h-40 object-cover rounded-xl" src="./5.png" alt="" />
                      </a>
                      <div class="p-2">                      
                        <h2 class="font-bold text-lg text-center">Food Store</h2>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative text-white py-8">
       <div className="z-0 absolute inset-0 bg-cover bg-center bg-no-repeat footer-img">
    <div className="absolute inset-0 bg-black opacity-60"></div></div>
  <div className="container mx-auto px-4 z-10 relative">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
     
      
     
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul>
          <li className="mb-2"><a href="#" className="">Home</a></li>
          <li className="mb-2"><a href="#" className="">Destinations</a></li>
          <li className="mb-2"><a href="#" className="">Tours</a></li>
          <li className="mb-2"><a href="#" className="">Contact Us</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <p className="text-sm mb-2">Email: info@travelworld.com</p>
        <p className="text-sm mb-2">Phone: +123 456 7890</p>
        <p className="text-sm">Address: 123 Travel Street, Wanderlust City, World</p>
      </div>


      <div>
        <h3 className="text-lg font-bold mb-4">About Us</h3>
        <p className="text-sm">
        At WanderLust Journeys, we believe that travel is more than just visiting new places—it's about creating unforgettable memories, experiencing diverse cultures, and connecting with the world around us.

         </p>
      </div>

    </div>

   
    <div className="mt-8 text-center">
      <h3 className="text-lg font-bold mb-4">Follow Us</h3>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-purple-300 hover:text-purple-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            
            <path d="M22.675 0h-21.35C0.599 0 0 0.599 0 1.326v21.348C0 23.401 0.599 24 1.326 24H12.81v-9.294H9.692V11.07h3.118V8.461c0-3.1 1.894-4.791 4.658-4.791 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.311h3.587l-.467 3.636h-3.12V24h6.116c.727 0 1.326-.599 1.326-1.326V1.326C24 .599 23.401 0 22.675 0z"/>
          </svg>
        </a>
        <a href="#" className="text-purple-300 hover:text-purple-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
         
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 2.202.271 3.034.574.833.303 1.545.711 2.251 1.418s1.115 1.419 1.418 2.251c.303.832.516 1.828.574 3.034.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.058 1.206-.271 2.202-.574 3.034-.303.833-.711 1.545-1.418 2.251-.706.707-1.418 1.115-2.251 1.418-.832.303-1.828.516-3.034.574-1.266.058-1.646.07-4.851.07s-3.584-.012-4.85-.07c-1.206-.058-2.202-.271-3.034-.574-.833-.303-1.545-.711-2.251-1.418-.707-.706-1.115-1.418-1.418-2.251-.303-.832-.516-1.828-.574-3.034C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.058-1.206.271-2.202.574-3.034.303-.833.711-1.545 1.418-2.251C5.032 2.874 5.744 2.466 6.577 2.163c.832-.303 1.828-.516 3.034-.574C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.756 0 8.322.015 7.052.073 5.77.131 4.713.355 3.765.769 2.839 1.169 2.021 1.795 1.207 2.61c-.813.814-1.439 1.632-1.839 2.558-.414.948-.638 2.005-.696 3.287C0 8.322 0 8.756 0 12s.015 3.678.073 4.948c.058 1.282.282 2.339.696 3.287.4.926 1.026 1.744 1.839 2.558.814.813 1.632 1.439 2.558 1.839.948.414 2.005.638 3.287.696 1.27.058 1.704.073 4.948.073s3.678-.015 4.948-.073c1.282-.058 2.339-.282 3.287-.696.926-.4 1.744-1.026 2.558-1.839.813-.814 1.439-1.632 1.839-2.558.414-.948.638-2.005.696-3.287.058-1.27.073-1.704.073-4.948s-.015-3.678-.073-4.948c-.058-1.282-.282-2.339-.696-3.287-.4-.926-1.026-1.744-1.839-2.558-.814-.813-1.632-1.439-2.558-1.839-.948-.414-2.005-.638-3.287-.696-1.27-.058-1.704-.073-4.948-.073zM12 5.838c-3.4 0-6.162 2.761-6.162 6.162s2.761 6.162 6.162 6.162 6.162-2.761 6.162-6.162-2.761-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
          </svg>
        </a>
        <a href="#" className="text-purple-300 hover:text-purple-100">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
           
            <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.95.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.094-.205-7.725-2.165-10.156-5.144-.424.728-.666 1.571-.666 2.475 0 1.708.87 3.215 2.19 4.1-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.697 4.374 3.946 4.828-.414.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.626 1.956 2.444 3.379 4.599 3.419-1.683 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.211 7.557 2.211 9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.425-.014-.637.961-.694 1.797-1.56 2.457-2.549z"/>
          </svg>
        </a>
      </div>
    </div>
    
    
    <div className="mt-8 text-center text-sm text-purple-300">
      &copy; 2024 TravelWorld. All rights reserved.
    </div>
  </div>
</footer>

  )
}

export default Footer
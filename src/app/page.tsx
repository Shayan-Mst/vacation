import Image from "next/image";
import welcome from "./../../public/welcome.jpg"


export default function Home() {

 
  
  return (

   
      
      <div className="p-8 lg:px-10 h-full">
         <section className="h-full w-full">
        <div>
        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/></svg>
        </div>

        <div className="h-full m-0 animate-slide-in lg:hidden">  
<div className="grid place-items-center h-full">
  <div>
<div className="flex-shrink text-2xl  font-bold text-center mt-14">Discover Your Next</div>
<div className="text-md  text-center mt-4">Explore new destinations and create unforgettable memories</div>
<div className="w-full mx-auto mt-16 md:w-2/3 sm:w-3/4">
<Image className='rounded-full ' src={welcome} alt='travel' priority ></Image>
 
</div>
<div className='text-center'>
<button className='w-full bg-gray-100 shadow-lg p-4 rounded-lg my-16 font-bold md:w-1/2  sm:w-2/3'>Explore</button>
</div>
</div>
       </div>


      
       
        </div>
        <div className="h-full m-0 animate-slide-top hidden lg:block">
  <div className="flex items-center justify-around h-full">
  <div className="w-1/2 mx-12">
  <picture ><Image className='rounded-full image-min-size' src={welcome} alt='travel' priority ></Image></picture>
 
</div>
    <div className="text-center w-1/2">

    <div className="text-4xl font-bold  mt-14">Discover Your Next</div>
<div className=" text-md  mt-8 text-wrap">Explore new destinations and create unforgettable memories. Whether you're seeking adventure in the mountains, relaxation on pristine beaches, the world is waiting to be discovered!</div>
    <button className=' bg-gray-100 shadow-lg p-4 rounded-lg my-16 font-bold lg:w-1/2 text-btn'>Explore</button>

    </div>




</div>
       </div>
       </section>
     

      </div>
  );
}

import Image from "next/image"
import login from './../../../public/login.jpg'
import bglogin from './../../../public/bg-login.jpg'

const page = () => {
  return (
    <>
    <div className='p-8 lg:px-10 h-full'>
      <section className='h-full w-full flex items-center justify-center'>

<div className="sm:bg-white sm:p-8 login-container">
 <Image  className="img-rnd w-full"  src={login} alt="nature" priority></Image>

<div className="text-center my-7 animated-text">
  <span className="text-3xl font-bold ">Explore</span>
  
  <span className="text-3xl font-bold ">Destination</span>
  

</div>

<div className="login-content">
  <form className="login-form">
   
    <div className="form-group">
      <label className="text-sm" htmlFor="email">Email</label>
      <input className="bg-gray-100" type="email" id="email" name="email" required/>
    </div>
    <div className="form-group">
      <label className="text-sm" htmlFor="password">Password</label>
      <input className="bg-gray-100" type="password" id="password" name="password" required/>
      <div className="text-end"><span className="text-xs">Find your dream vacation</span></div>
    </div>
    <div className="flex justify-end relative px-4">
    <button type="submit" className="login-btn"><svg className="opacity-90" width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1V15H9V13H14V3H9V1L16 1Z" fill="#ffffff"/>
<path d="M6 4V7L8.74229e-08 7L0 9H6V12H7L11 8L7 4H6Z" fill="#ffffff"/>
</svg></button>

</div>
  </form>
</div>

</div>
      </section>
    </div>
    <Image src={bglogin} alt="background-nature"  className="img-background hidden sm:block" priority></Image>
    <div className="overlay hidden sm:block"></div>
    </>
  )
}

export default page
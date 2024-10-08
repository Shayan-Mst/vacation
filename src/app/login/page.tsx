'use client'
import Image from "next/image"
import login from './../../../public/login.jpg'
import bglogin from './../../../public/bg-login.jpg'
import { FormEvent, useEffect, useState } from "react"
import account from './../account.json'
import { useRouter } from "next/navigation"

const page = () => {

  const [eye,setEye] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false);
  const [loader,setLoader] = useState(false)
  const [success,setSuccess] = useState(false);
  const account_data = account.users[0];

  const router = useRouter();
  
  function Login(e: FormEvent<HTMLFormElement>){

    e.preventDefault()
    setLoader(true)
  return new Promise((resolve, reject) => {
    // Check if the entered email and password match any user
    
    setLoader(true)
    
  if(email == account_data.email && password == account_data.password){

    resolve({ message: "Login successful!" });
    setError(false)
    setTimeout(()=>{
     setSuccess(true)
    },1000)

    setTimeout(()=>{

      router.push('/home');
      setLoader(false)

    },3000)
    
  }
  
else{
  reject({ message: "Invalid email or password!" });
  setSuccess(false)
  
  setTimeout(()=>{
    setError(true)
    setLoader(false)
  },2000)
  
}
});
  }



  // Function to simulate the promise-based login

  useEffect(()=>{
    const passwordInput = document.getElementById('password') as HTMLInputElement ;
    eye? passwordInput.type ='text':passwordInput.type='password'
   
  },[eye])

  return (
    <>
    <div className='p-8 lg:px-10 h-full'>
      <section className='h-full w-full flex items-center justify-center'>

<div className="sm:bg-white sm:p-8 login-container">
 <Image  className="img-rnd w-full"  src={login} alt="nature" priority></Image>

<div className="text-center my-7 animated-text">
  <span className="text-3xl font-bold mr-1 text-purple-700">Explore</span>
  
  <span className="text-3xl font-bold ">Destination</span>
  

</div>

<div className="login-content">
  <form onSubmit={(e)=>Login(e)} className="login-form">
   
    <div className="form-group">
      <div className="flex justify-between items-center">
      <label className="text-sm " htmlFor="email">Email</label>
      {error?  <label className="text-xs text-red-500">
      <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="red" 
    width='10'
    height='10'
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    className="error mr-1">
  <circle cx="12" cy="12" r="10"/>
  <line x1="15" y1="9" x2="9" y2="15"/>
  <line x1="9" y1="9" x2="15" y2="15"/>
</svg>

        email or password is incorrect</label> : null}
     
      </div>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-gray-100" type="email" id="email" name="email" placeholder="example@gmail.com" required/>
    </div>
    <div className="form-group">
      <label className="text-sm" htmlFor="password">Password</label>
      <div className="relative">
      <input value={password} minLength={8}  onChange={(e)=>setPassword(e.target.value)} className="bg-gray-100" type="password" id="password" name="password" required/>
      {eye?<svg onClick={( ()=> setEye(false))} className="absolute right-3 bottom-3" width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0003 5.251C7.96932 5.183 3.80032 8 1.17932 10.885C0.904199 11.1904 0.751953 11.5869 0.751953 11.998C0.751953 12.4091 0.904199 12.8056 1.17932 13.111C3.74332 15.935 7.90032 18.817 12.0003 18.748C16.1003 18.817 20.2583 15.935 22.8243 13.111C23.0994 12.8056 23.2517 12.4091 23.2517 11.998C23.2517 11.5869 23.0994 11.1904 22.8243 10.885C20.2003 8 16.0313 5.183 12.0003 5.251Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 12C15.7498 12.7416 15.5297 13.4666 15.1175 14.0831C14.7054 14.6997 14.1196 15.1802 13.4344 15.4638C12.7491 15.7475 11.9952 15.8216 11.2678 15.6768C10.5404 15.532 9.87234 15.1748 9.348 14.6503C8.82365 14.1258 8.4666 13.4576 8.32198 12.7302C8.17737 12.0028 8.25169 11.2489 8.53555 10.5637C8.81941 9.87854 9.30005 9.29293 9.91672 8.88092C10.5334 8.46891 11.2584 8.249 12 8.249C12.4926 8.24887 12.9804 8.34581 13.4355 8.53428C13.8905 8.72275 14.304 8.99906 14.6523 9.34741C15.0006 9.69576 15.2768 10.1093 15.4651 10.5645C15.6535 11.0196 15.7503 11.5074 15.75 12Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>:<svg onClick={( ()=> setEye(true))} className="absolute right-3 bottom-3" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
      


</div>
      <div className="text-end"><span className="text-xs">Find your dream vacation</span></div>
    </div>
    <div className="flex justify-end items-center relative px-4">
   <span className={`mr-8 text-green-500 text-xs success ${success?'active':null}`}>
   <svg className="inline mx-1" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 16.17L4.83 12C4.24 11.41 3.31 11.41 2.71 12C2.1 12.59 2.1 13.52 2.71 14.12L8.29 19.71C8.68 20.1 9.31 20.1 9.7 19.71L21.29 8.12C21.92 7.49 21.92 6.5 21.29 5.87C20.68 5.27 19.75 5.27 19.14 5.87L9 16.17Z" fill="#4CAF50"/>
</svg>

    Login Successful</span>
    <button type="submit" className="login-btn">
      {loader? <div className="loader"></div> :  <svg className="opacity-90" width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1V15H9V13H14V3H9V1L16 1Z" fill="#ffffff"/>
<path d="M6 4V7L8.74229e-08 7L0 9H6V12H7L11 8L7 4H6Z" fill="#ffffff"/>
</svg>}
     
</button>

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
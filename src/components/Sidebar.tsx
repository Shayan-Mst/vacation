"use client"
import React, { useState } from 'react'
import {  useShow } from '@/context/context'
import Link from 'next/link';

const Sidebar = () => {
    
  const [active,setActive] = useState('');
  const [drop,setDrop] = useState(false);
  

    const {show,setShow} = useShow();

    function dropShow(){

      setDrop(prev => !prev)
     const svg =  document.getElementById('toggleIcon') as any
     svg.classList.toggle('rotate-180');
      
  }

  
   
  

  return (
    <div className={`sidebar ${show?'sidebar--active':null}`}>

    <div className='sidebar-logo'>

    <span className='text-lg font-bold'>MENU</span>
    <svg onClick={()=>setShow(false)} width="30" height="30" xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
     
    </div>

    <ul className='sidebar-content'>

<li className='sidebar-item'>
<Link href="/home" className='sidebar-link'>

<svg style={{marginLeft:"2px"}} className={`${active == 'Home'?'item-active':null}`} width="20" height="20" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="31.Home"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path d="M18.293 13.707 12 7.414l-6.293 6.293-1.414-1.414L12 4.586l7.707 7.707-1.414 1.414z"/><path d="M17 18H7v-8h2v6h6v-6h2v8z"/></g></svg>
<span>Home</span>
</Link>
</li>


<li className='sidebar-item'>
<Link href="/travel"  className='sidebar-link'>
<svg width="24" height="24" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M189.849 440.139h-1.592a15.766 15.766 0 0 1-15.721-15.708l.007-29.679 46.812-27.568a66.266 66.266 0 0 1-1.35-13.116l-2.543-62.65-132.193 38.337h-1.416a17.618 17.618 0 0 1-17.6-17.596v-44.382l147.677-79.634-2.28-68.368c0-26.42 20.565-47.914 45.841-47.914 25.28 0 45.843 21.493 45.843 47.914l-.007.332-2.252 67.498 148.671 80.176v44.378a17.613 17.613 0 0 1-17.593 17.596h-1.416l-133.21-38.633-2.56 62.943a65.626 65.626 0 0 1-1.24 12.581l47.737 28.106-.006 29.666a15.723 15.723 0 0 1-15.725 15.718h-1.589l-63.903-20.885h-4.499zm2.64-33.982-.003 12.13 58.084-18.989h10.853l58.091 18.986.003-12.127-51.43-30.274 2.62-7.69a44.373 44.373 0 0 0 2.31-14.338l.01-.406 3.602-88.574 151.164 43.837v-29.02l-149.074-80.4 2.664-79.673c-.077-15.348-11.664-27.808-25.892-27.808s-25.816 12.463-25.891 27.808l2.683 80.215-148.08 79.853v29.024l150.158-43.547 3.598 88.68a44.38 44.38 0 0 0 2.447 14.754l2.722 7.743z" data-name="Airplane02"/></svg>
<span>Travel</span>
</Link>
</li>


<li className='sidebar-item'>
<Link href="/discounts"  className='sidebar-link'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='black'><path d="M13.708 11.808 8.05 13.222a.5.5 0 1 0 .242.97l5.658-1.414a.5.5 0 0 0-.242-.97zM11.707 11.671a1.5 1.5 0 0 0 1.061-2.56 1.536 1.536 0 0 0-2.122 0 1.5 1.5 0 0 0 1.061 2.56zm-.353-1.853a.5.5 0 1 1 0 .707.5.5 0 0 1 0-.707zM9.232 14.768a1.5 1.5 0 1 0 2.122 0 1.5 1.5 0 0 0-2.122 0zm1.414 1.414a.51.51 0 0 1-.707 0 .5.5 0 0 1 .354-.853.494.494 0 0 1 .353.146.5.5 0 0 1 0 .707z"/><path d="M21.894 4.341a2.49 2.49 0 0 0-.561-1.657A2.3 2.3 0 0 0 19.5 1.93a2.558 2.558 0 0 0-2.015.866A3.388 3.388 0 0 0 16.834 4H10.5a.5.5 0 0 0-.354.146l-8.292 8.293a1.5 1.5 0 0 0 0 2.122l7.585 7.585a1.5 1.5 0 0 0 2.122 0l8.293-8.292A.5.5 0 0 0 20 13.5V7.332a3.12 3.12 0 0 0 1.894-2.991zM19 13.293l-8.146 8.146a.5.5 0 0 1-.708 0l-7.585-7.585a.5.5 0 0 1 0-.708L10.707 5h5.907a8.243 8.243 0 0 0-.014 1.969.5.5 0 1 0 .991-.131A7.162 7.162 0 0 1 17.63 5h.87a.5.5 0 0 1 .5.5zm1-7.052V5.5A1.5 1.5 0 0 0 18.5 4h-.589a2.119 2.119 0 0 1 .328-.546A1.576 1.576 0 0 1 19.5 2.93a1.351 1.351 0 0 1 1.076.407 1.547 1.547 0 0 1 .318 1A2.386 2.386 0 0 1 20 6.241z"/></svg>
<span>Discounts</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/locations"  className='sidebar-link'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black"><path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z"/><path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>
<span>Location</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<svg width="20" height="20" fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="47-Contact-Real Estate"><path d="M22.13 16.44a1 1 0 0 0-1.41 0L17.18 20l-5.66-5.66 3.54-3.54a1 1 0 0 0 0-1.41L8 2.3a1 1 0 0 0-1.41 0L1.63 7.25A5.91 5.91 0 0 0 .32 9.41a4.64 4.64 0 0 0 1.3 4.91l15.56 15.55a4.78 4.78 0 0 0 3.44 1.56 5.39 5.39 0 0 0 3.64-1.56l5-5a1 1 0 0 0 0-1.41zm.71 12a2.85 2.85 0 0 1-4.25 0l-7.78-7.78L3 12.9a2.85 2.85 0 0 1 0-4.24l4.28-4.24 5.66 5.66-2.83 2.82a2 2 0 0 0 0 2.83l5.66 5.66a2 2 0 0 0 2.83 0l2.83-2.83 5.66 5.66z"/><path d="m30.63 4.22-5-4a1 1 0 0 0-1.25 0l-5 4A1 1 0 0 0 19 5v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-.37-.78zM29 12h-2V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3h-2V5.48l4-3.2 4 3.2z"/></g></svg>
<span>Contact Us</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='black'><circle cx="9.952" cy="9.953" r="3"/><path d="M9.952 0A9.953 9.953 0 1 0 19.9 9.953 9.953 9.953 0 0 0 9.952 0zm7 10.953h-2.1a4.98 4.98 0 0 1-.731 1.755l1.487 1.492-1.414 1.41-1.488-1.488a4.955 4.955 0 0 1-1.754.73v2.1h-2v-2.1a5 5 0 0 1-1.752-.731L5.709 15.61 4.3 14.2l1.488-1.489a4.94 4.94 0 0 1-.73-1.754h-2.1v-2h2.1A5 5 0 0 1 5.783 7.2L4.3 5.711 5.71 4.3 7.2 5.785a4.919 4.919 0 0 1 1.754-.73v-2.1h2v2.1a4.963 4.963 0 0 1 1.754.73L14.194 4.3l1.414 1.414L14.12 7.2a4.936 4.936 0 0 1 .731 1.755h2.1z"/></svg><span>Setting</span>
</Link>
</li>

<li onClick={dropShow} className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<svg style={{marginLeft:"2px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" fill='black'><g id="Layer_2" data-name="Layer 2"><g id="layer_1-2" data-name="layer 1"><path className="cls-1" d="M48 20h-2V2H2v18H0V1a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1zM47 48H1a1 1 0 0 1-1-1V26h2v20h44V26h2v21a1 1 0 0 1-1 1z"/><path className="cls-1" d="M4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM1 8h46v2H1zM3 40h42v2H3zM27 31a1 1 0 0 1-.94-.65L24 24.85l-2.06 5.5a1 1 0 0 1-1.88 0l-3-8 1.88-.7 2.06 5.5 2.06-5.5a1 1 0 0 1 1.88 0l2.06 5.5 2.06-5.5 1.88.7-3 8A1 1 0 0 1 27 31zM12 31a1 1 0 0 1-.94-.65L9 24.85l-2.06 5.5a1 1 0 0 1-1.88 0l-3-8 1.88-.7L6 27.15l2.06-5.5a1 1 0 0 1 1.88 0l2.06 5.5 2.06-5.5 1.88.7-3 8A1 1 0 0 1 12 31zM42 31a1 1 0 0 1-.94-.65L39 24.85l-2.06 5.5a1 1 0 0 1-1.88 0l-3-8 1.88-.7 2.06 5.5 2.06-5.5a1 1 0 0 1 1.88 0l2.06 5.5 2.06-5.5 1.88.7-3 8A1 1 0 0 1 42 31z"/></g></g></svg>
<span>Pages</span>
<svg id="toggleIcon" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
</Link></li>

<li  className={`sidebar-item ${drop?'drop--active':null}`}>
<Link href="/home"  className='sidebar-link'>Artist</Link>
<Link href="/home"  className='sidebar-link'>Event</Link>
<Link href="/home"  className='sidebar-link'>Release</Link>
<Link href="/home"  className='sidebar-link'>Product</Link>
<Link href="/home"  className='sidebar-link'>Cart</Link>
<Link href="/home"  className='sidebar-link'>Profile</Link>
<Link href="/home"  className='sidebar-link'>Article</Link>
<Link href="/home"  className='sidebar-link'>About</Link>
<Link href="/home"  className='sidebar-link'>Pricing Plans</Link>
<Link href="/home"  className='sidebar-link'>Privacy Policy</Link>
<Link href="/login"  className='sidebar-link'>Sign in</Link>


</li>

    </ul>
<div className='signature'>Shayan Mozafari

<span className='block  font-normal'>Web Developer</span></div>
</div>
  )
}

export default Sidebar
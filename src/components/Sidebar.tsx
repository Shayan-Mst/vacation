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
      console.log(drop)
  }

  return (
    <div className={`sidebar ${show?'sidebar--active':null}`}>

    <div className='sidebar-logo'>

    <svg onClick={()=>setShow(false)} width="30" height="30" xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
     
    </div>

    <ul className='sidebar-content'>

<li className='sidebar-item'>
<Link href="/home" className='sidebar-link'>
<i className={`fa-solid fa-house ${active == 'Home'?'item-active':null}`}></i>
<span>Home</span>
</Link>
</li>


<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className={`fa-solid fa-music ${active == 'Release'?'item-active':null}`}></i>
<span>Releases</span>
</Link>
</li>


<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className={`fa-solid fa-user ${active == 'Artist'?'item-active':null}`}></i>
<span>Artists</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className={`fa-regular fa-calendar-days ${active == 'Event'?'item-active':null}`}></i>
<span>Events</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className={`fa-solid fa-microphone ${active == 'Podcast'?'item-active':null}`}></i>
<span>Podcasts</span>
</Link>
</li>
<li className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className={`fa-solid fa-store ${active == 'Store'?'item-active':null}`}></i>
<span>Store</span>
</Link>
</li>

<li onClick={dropShow} className='sidebar-item'>
<Link href="/home"  className='sidebar-link'>
<i className="fa-solid fa-folder"></i>
<span>Pages</span>
<i style={{fontSize:"10px"}} className="fa-solid fa-angle-down"></i>
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
<Link href="/home"  className='sidebar-link'>Sign in</Link>

<Link href="/home"  className='sidebar-link'>Sign up</Link>


</li>

    </ul>

</div>
  )
}

export default Sidebar
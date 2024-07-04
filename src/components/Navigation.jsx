import i from '../assets/insta.png';
import w from '../assets/whatsapp.png';
import m from '../assets/map.png';
import menulogo from '../assets/icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const whatsapp = `https://wa.me/message/R5VSTKRNVGT6E1`;
    const insta = `https://www.instagram.com/fitty_fresh_bakes?utm_source=qr&igsh=MXNrcDhscDZmejdkbw==`;
    const map = `https://maps.app.goo.gl/qzR1mLzKwWV8viKK9`;

    const [menuopen, setmenu] = useState(false)

    const menuclick = () => {
        setmenu(!menuopen)
    }
    return (
        <>
            <nav className='flex justify-between p-4 md:p-8 md:justify-around sticky top-0 shadow-lg z-50'>
                <h1 className='text-2xl font-bold md:text-3xl'>Fitty Fresh Bakes</h1>
                <div className='block cursor-pointer md:hidden'>
                    <img src={menulogo} alt='menu' onClick={menuclick} />
                    {
                        menuopen && <div className=" bg-white absolute left-0 p-5 border border-black shadow-xl w-svw">
                            <p className="text-red-600 font-bold text-2xl text-right" onClick={menuclick}>X</p>
                            <p className=" text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600"><Link to={'/'}>Home</Link></p>
                            <p className=" text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600"><Link to={'/menulist'}>Menu</Link></p>
                            <p className=" text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600"><Link to={'/contact'}>Contact</Link></p>
                            <p className="text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600" ><a href={whatsapp}>Whatsapp</a></p>
                            <p className="text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600" ><a href={insta}>Instagram</a></p>
                            <p className="text-black underline text-xl text-left pl-4 mb-3 hover:text-pink-600" ><a href={map}>Location</a></p>
                        </div>
                    }
                </div>
                <div className='hidden md:flex gap-8'>
                    <button className=' hover:scale-125'><Link to="/">Home</Link></button>
                    <button className=' hover:scale-125'><Link to="/menulist">Menu</Link></button>
                    <button className=' hover:scale-125'><Link to="/contact">Contact</Link></button>
                    <a className=' hover:scale-125' href={whatsapp}><img src={w} alt='whatsapp' /></a>
                    <a className=' hover:scale-125' href={insta}><img src={i} alt='insta' /></a>
                    <a className=' hover:scale-125' href={map}><img src={m} alt='map' /></a>
                </div>
            </nav>
        </>
    )
}
export default Navigation
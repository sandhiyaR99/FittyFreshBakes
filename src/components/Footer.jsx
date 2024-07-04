import i from '../assets/insta.png';
import w from '../assets/whatsapp.png';
import m from '../assets/map.png';
const Footer = () => {
    const whatsapp = `https://wa.me/message/R5VSTKRNVGT6E1`;
    const insta = `https://www.instagram.com/fitty_fresh_bakes?utm_source=qr&igsh=MXNrcDhscDZmejdkbw==`;
    const map = `https://maps.app.goo.gl/qzR1mLzKwWV8viKK9`;

    return (<>
        <div className="mt-4 px-10 pt-10 pb-2 flex flex-col gap-2 text-white" style={{ backgroundColor: "#C8778E" }}>
            <h1 className='font-bold'>Fitty Fresh Bakes</h1>
            <p className='font-semibold'>Contact US :</p>
            <div className='flex gap-4'>
            <a className=' hover:scale-125' href={whatsapp}><img src={w} alt='whatsapp' /></a>
            <a className=' hover:scale-125' href={insta}><img src={i} alt='insta' /></a>
            <a className=' hover:scale-125' href={map}><img src={m} alt='map' /></a>
            </div>
            <hr></hr>
            <div className=' text-center'>
                <p>Copyright @2024 Fitty Fresh Bakes. All Rights Reserved</p>
                <p>Designed by Sandy Techcy</p>
                </div>
        </div>
    </>)
}
export default Footer
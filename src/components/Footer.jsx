import i from '../assets/insta.png';
import w from '../assets/whatsapp.png';
import m from '../assets/map.png';

const Footer = () => {
    const whatsapp = `https://wa.me/message/R5VSTKRNVGT6E1`;
    const insta = `https://www.instagram.com/fitty_fresh_bakes?utm_source=qr&igsh=MXNrcDhscDZmejdkbw==`;
    const map = `https://maps.app.goo.gl/qzR1mLzKwWV8viKK9`;

    return (
        <footer className="mt-4 px-10 pt-8 pb-4 flex flex-col gap-4 text-white" style={{ backgroundColor: "#C8778E" }}>
            <h1 className="font-bold text-2xl">Fitty Fresh Bakes</h1>
            <p className="font-semibold text-lg">Contact Us:</p>
            <div className="flex gap-4">
                <a className="transform transition-transform hover:scale-125" href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <img src={w} alt="whatsapp" className="w-8 h-8" />
                </a>
                <a className="transform transition-transform hover:scale-125" href={insta} target="_blank" rel="noopener noreferrer">
                    <img src={i} alt="instagram" className="w-8 h-8" />
                </a>
                <a className="transform transition-transform hover:scale-125" href={map} target="_blank" rel="noopener noreferrer">
                    <img src={m} alt="map" className="w-8 h-8" />
                </a>
            </div>
            <hr className="border-t border-gray-200 my-2" />
            <div className="text-center">
                <p>&copy; 2024 Fitty Fresh Bakes. All Rights Reserved.</p>
                <p>Designed by Sandy Techz</p>
            </div>
        </footer>
    );
}

export default Footer;

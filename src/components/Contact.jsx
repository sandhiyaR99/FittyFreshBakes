import Navigation from "./Navigation"
import i from '../assets/insta.png';
import w from '../assets/whatsapp.png';
import m from '../assets/map.png';

const Contact = () => {
    return (
        <>
            <Navigation></Navigation>

            <div className="max-w-lg mx-auto mt-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <div className="bg-white p-6 shadow-md rounded-md">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Our Address</h3>
                        <p>Kadaikambatty, kannerimukku, kotagiri-643217</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                        <p>+91 6379466763</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Map Location</h3>
                        <a href="https://maps.app.goo.gl/qzR1mLzKwWV8viKK9">
                            <img src={m} alt="Instagram" className="w-10 h-auto inline-block mr-2" />
                            Click to view our location
                        </a>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Follow Us on Instagram</h3>
                        <a href="https://www.instagram.com/fitty_fresh_bakes">
                            <img src={i} alt="Instagram" className="w-10 h-auto inline-block mr-2" />
                            @fitty_fresh_bakes
                        </a>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
                        <a href="https://wa.me/message/R5VSTKRNVGT6E1">
                            <img src={w} alt="WhatsApp" className="w-10 h-auto inline-block mr-2" />
                            Click here to Message us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
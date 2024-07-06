import { Link } from "react-router-dom";
import logoimage from '../assets/logof.png';
import many from '../assets/many.avif';

const Welcome = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-backroungimage bg-cover bg-center opacity-50">
                <div className="absolute inset-0 bg-white opacity-30"></div>
                <img src={many} className="absolute inset-0 object-cover w-full h-full" alt="background" />
            </div>

            <div className="relative z-10 text-center py-10">
                <img src={logoimage} className="mx-auto px-10" alt="logoimg" />

                <div className="text-white mt-8">
                    <h1 className="text-2xl font-bold mb-2">WELCOME TO</h1>
                    <h1 className="text-xl font-bold text-pink-600 mb-4">Bakes by Sandy</h1>
                    <p className="text-lg font-semibold">Joyful Bites unforgettable delights</p>
                    <p className="text-pink-600 font-semibold mt-3">WEDDING CAKES · BIRTHDAY CAKES · THEMED CAKES</p>
                    <button className="bg-white hover:bg-pink-600 hover:text-white text-pink-600 rounded-full px-8 py-3 mt-6 transition-transform transform hover:scale-105 font-bold">
                        <Link to="/contact">ORDER NOW</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

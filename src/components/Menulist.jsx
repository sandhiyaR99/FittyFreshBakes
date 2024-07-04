import { useState } from "react";
import Navigation from "./Navigation";

const Menulist = () => {
    const cakes = [
        'Chocolate Cake',
        'Vanilla Cake',
        'Red Velvet Cake',
        'White Forest Cake',
        'BlueBerry Cake',
        'Strawberry Shortcake',
        'Black Forest Cake',
        'Rainbow Cake',
        'Banana Cake',
        'Mango Cake',
        'Barbie Cake',
        'Chocolate Truffle Cake',
        'Football Cake',
        'Jamun Cake',
        'Rasamalai Cake',
        'Tea Cake',
    ];

    const [ip, setIp] = useState("");
    const [ipcake, setIpcake] = useState([]);
    const [ipthr, setIpthr] = useState(false);

    const ipcakeupdate = (e) => {
        setIp(e.target.value);
    };

    const searchcake = () => {
        setIpthr(true);
        setIpcake(
            cakes.filter((cake) =>
                cake.toLowerCase().includes(ip.toLowerCase())
            )
        );
    };

    return (
        <>
            <Navigation />
            <h2 className="text-2xl font-bold mb-4 text-center mt-8">Cake Menu</h2>
            <div className="text-center mb-5">
                <input
                    onChange={ipcakeupdate}
                    className="border p-3 rounded-3xl w-1/2 px-5 mr-2"
                    placeholder="Search your taste.."
                />
                <button
                    onClick={searchcake}
                    className="bg-pink-600 text-white rounded-full px-5 py-3 mt-6 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"
                >
                    Search
                </button>
            </div>
            <ul>
                {ipthr
                    ? ipcake.map((cake, index) => (
                          <li key={index} className="mb-4 text-center hover:text-pink-500">
                              {cake}
                          </li>
                      ))
                    : cakes.map((cake, index) => (
                          <li key={index} className="mb-4 text-center hover:text-pink-500">
                              {cake}
                          </li>
                      ))}
            </ul>
        </>
    );
};

export default Menulist;

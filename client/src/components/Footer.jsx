import React from "react";

const Footer = () => {
    return (
        <div className="">
            <div className="bottom-0 flex-1">
                <div className="text-center w-screen bg-gray-800 py-3 text-white font-serif text-xl/8">Look at us, coming together, at the <a href="/" style={{color: "white"}}>EventCenter!</a></div>
                {/* Navigation links */}
                <ul className="flex justify-center space-x-3 bg-gray-800 py-4">
                    <li><a href="../AboutUs" className="text-white hover:text-orange-500 font-serif text-xl/8">Pam</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-blue-600 font-serif text-xl/8">Alan</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-green-500 font-serif text-xl/8">Josiah</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-red-500 font-serif text-xl/8">Chris</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-purple-500 font-serif text-xl/8">David-M</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-yellow-400 font-serif text-xl/8">David-H</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Footer;
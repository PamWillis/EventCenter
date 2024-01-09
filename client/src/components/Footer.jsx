import React from "react";

const Footer = () => {
    return (
        <div className="">
            <div className="bottom-0 flex-1">
                <div className="text-center w-screen bg-gray-800 py-3 text-white">Look at us, coming together, at the Event Center!</div>
                {/* Navigation links */}
                <ul className="flex justify-center space-x-8 bg-gray-800 py-4">
                    <li><a href="../AboutUs" className="text-white hover:text-orange-500 font-serif text-xl/10">Pam</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-blue-600 font-serif text-xl/10">Alan</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-green-500 font-serif text-xl/10">Josiah</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-red-500 font-serif text-xl/10">Chris</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-purple-500 font-serif text-xl/10">David-M</a></li>
                    <li><a href="../AboutUs" className="text-white hover:text-yellow-400 font-serif text-xl/10">David-H</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Footer;
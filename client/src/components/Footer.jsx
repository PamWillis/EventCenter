
const Footer = () => {
    return (
        <div className="h-full">
            <div className="bottom-0 flex-1 ">
                <div className="text-center w-screen bg-gradient-to-r from-cyan-900 to-green-600 py-3 text-white font-serif text-xl/8">Look at us, coming together, at the <a href="/" style={{color: "white"}}>EventCenter!</a>
                {/* Navigation links */}
                <ul className="flex flex-wrap justify-center space-x-10 bg-transparent">
                    <li><a href="https://github.com/PamWillis" className="text-white hover:text-orange-500 font-serif text-xl/8">Pam</a></li>
                    <li><a href="https://github.com/ajmecca68" className="text-white hover:text-blue-600 font-serif text-xl/8">Alan</a></li>
                    <li><a href="https://github.com/jssmith73" className="text-white hover:text-green-500 font-serif text-xl/8">Josiah</a></li>
                    <li><a href="https://github.com/chrisahn10" className="text-white hover:text-red-500 font-serif text-xl/8">Chris</a></li>
                    <li><a href="https://github.com/Prosentint" className="text-white hover:text-purple-500 font-serif text-xl/8">David-M</a></li>
                    <li><a href="https://github.com/thefrenchman1" className="text-white hover:text-yellow-400 font-serif text-xl/8">David-H</a></li>

                </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
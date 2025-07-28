import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="w-[90vw] max-w-7xl mx-auto grid grid-cols-5 gap-6 text-sm text-gray-600">
                {/* Popular Locations */}
                <div>
                    <h3 className="font-bold text-black mb-2">POPULAR LOCATIONS</h3>
                    <ul className="space-y-1">
                        <li>Kolkata</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Pune</li>
                    </ul>
                </div>

                {/* Trending Locations */}
                <div>
                    <h3 className="font-bold text-black mb-2">TRENDING LOCATIONS</h3>
                    <ul className="space-y-1">
                        <li>Bhubaneshwar</li>
                        <li>Hyderabad</li>
                        <li>Chandigarh</li>
                        <li>Nashik</li>
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="font-bold text-black mb-2">ABOUT US</h3>
                    <ul className="space-y-1">
                        <li>Tech@OLX</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* OLX */}
                <div>
                    <h3 className="font-bold text-black mb-2">OLX</h3>
                    <ul className="space-y-1">
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        <li>Vulnerability Disclosure Program</li>
                    </ul>
                </div>

                {/* Follow Us & Apps */}
                <div>
                    <h3 className="font-bold text-black mb-2">FOLLOW US</h3>
                    <div className="flex items-center gap-3 text-xl text-black mb-4">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaPlay />
                    </div>
                    <div className="space-y-2">
                        <img
                            src="https://statics.olx.in/external/base/img/playstore_2x.png"
                            alt="Google Play"
                            className="h-10 w-auto"
                        />
                        <img
                            src="https://statics.olx.in/external/base/img/appstore_2x.png"
                            alt="App Store"
                            className="h-10 w-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

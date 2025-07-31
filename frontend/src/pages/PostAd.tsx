import React from 'react';

const PostAd = () => {
    return (
        <form className="space-y-6 bg-white p-6 rounded-md shadow max-w-2xl mx-auto mt-6 border border-gray-300">
            <h2 className="text-2xl font-semibold text-center mb-4">POST YOUR AD</h2>

            {/* Title */}
            <div>
                <label className="block font-medium text-gray-700 mb-1">Ad Title *</label>
                <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Description */}
            <div>
                <label className="block font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                    rows={4}
                    placeholder="Write about the item"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Price */}
            <div>
                <label className="block font-medium text-gray-700 mb-1">Price *</label>
                <input
                    type="number"
                    placeholder="₹"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Location */}
            <div>
                <label className="block font-medium text-gray-700 mb-1">State *</label>
                <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select State</option>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                </select>
            </div>

            {/*image */}
            <div className="p-4 max-w-lg">
                <h2 className="text-lg font-bold mb-4">UPLOAD UP TO 5 PHOTOS</h2>
                <div className="grid grid-cols-3 gap-3">
                    <div className="relative w-full aspect-square border rounded overflow-hidden">
                        <img src="/path/to/image.jpg" className="w-full h-full object-cover" />
                        <button className="absolute top-1 right-1 bg-black text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">✕</button>
                        <span className="absolute bottom-1 left-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">COVER</span>
                    </div>


                    <div className="relative w-full aspect-square border-2 border-dashed border-gray-400 flex items-center justify-center text-center cursor-pointer rounded">
                        <div className="text-gray-600 text-sm">
                            <label className="text-2xl mb-1 cursor-pointer">
                                📷
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => console.log(e.target.files)}
                                />
                            </label>
                        </div>
                    </div>


                    <div className="w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center rounded text-gray-400 text-2xl">+</div>
                    <div className="w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center rounded text-gray-400 text-2xl">+</div>
                    <div className="w-full aspect-square border-2 border-dashed border-gray-300 flex items-center justify-center rounded text-gray-400 text-2xl">+</div>

                </div>
            </div>


            {/* Phone */}
            <div>
                <label className="block font-medium text-gray-700 mb-1">Mobile Phone Number *</label>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
            >
                Post Now
            </button>
        </form>
    );
};

export default PostAd;

import React from 'react';

const DownloadPromotion = () => {
    return (
        <div className="w-full bg-slate-100 py-6 flex justify-center items-center">
            <div className="w-[90vw] max-w-7xl grid grid-cols-3 items-center">

                <div className="flex justify-center">
                    <img
                        src="https://statics.olx.in/external/base/img/phone-app.webp"
                        alt="OLX App"
                        className="h-40 object-contain"
                    />
                </div>

                <div className="flex flex-col justify-center items-start px-4">
                    <h1 className="text-3xl font-bold mb-2">TRY THE OLX APP</h1>
                    <p className="text-base text-gray-600">
                        Buy, sell and find just about anything using the app on your mobile.
                    </p>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <a
                        href="https://apps.apple.com/in/app/olx-buy-sell-near-you/id913439792?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://statics.olx.in/external/base/img/appstore_2x.png"
                            alt="Download on the App Store"
                            className="h-10 w-32"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://statics.olx.in/external/base/img/playstore_2x.png"
                            alt="Get it on Google Play"
                            className="h-10 w-32"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DownloadPromotion;

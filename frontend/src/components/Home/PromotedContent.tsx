import React from 'react'

const PromotedContent = () => {
    return (
                <div className="w-full  py-6">
            <div className="w-full flex justify-center">
                <div className="bg-white w-[80vw] p-5">
                    <h1 className="text-lg font-semibold mb-4">PROMOTED CONTENT</h1>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-amber-200 p-4 text-center rounded">1</div>
                        <div className="bg-green-400 p-4 text-center rounded">2</div>
                        <div className="bg-red-300 p-4 text-center rounded">3</div>
                        <div className="bg-amber-200 p-4 text-center rounded">1</div>
                        <div className="bg-green-400 p-4 text-center rounded">2</div>
                        <div className="bg-red-300 p-4 text-center rounded">3</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PromotedContent

import React from 'react';
import sadface from '../assets/sadface.svg';

function Organisation() {
    return (
        <>
            {/* Boxes Section */}
            <div className="flex flex-col mx-10">
                {/* Box 1 */}
                <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                    <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>1st December’23 09:30</p>
                    <p className="flex-1 mr-4 mb-0">Congratulations! Event “Event XYZ” Approved.</p>
                    <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                </div>

                {/* Box 2 */}
                <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                    <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>1st December’23 09:30</p>
                    <p className="flex-1 mr-4 mb-0">Congratulations! Event “Event XYZ” Approved.</p>
                    <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                </div>

                {/* Box 3 */}
                <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                    <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>1st December’23 09:30</p>
                    <p className="flex-1 mr-4 mb-0">Congratulations! Event “Event XYZ” Approved.</p>
                    <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                </div>

                {/* Box 4 */}
                <div className="bg-gray-700 bg-opacity-70 flex items-center h-20 rounded-lg mb-4 p-4 text-white">
                    <p className="flex-none mr-8 mb-0" style={{ width: '30%' }}>1st December’23 09:30</p>
                    <p className="flex-1 mr-4 mb-0">Congratulations! Event “Event XYZ” Approved.</p>
                    <button className="flex-none bg-pinky text-white border-none px-4 py-2 rounded-lg cursor-pointer" style={{ width: '20%' }}>Manage Event</button>
                </div>
            </div>
        </>
    );
}

export default Organisation;

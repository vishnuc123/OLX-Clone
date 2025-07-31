import type { IconType } from 'react-icons';

import {
  FaCar, FaHome, FaMobileAlt, FaBriefcase, FaBicycle,
  FaTv, FaTruck, FaCouch, FaTshirt, FaBook, FaDog, FaConciergeBell
} from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type Category = {
  label: string;
  icon: IconType;
};

const categories: Category[] = [
  { label: "Cars", icon: FaCar },
  { label: "Properties", icon: FaHome },
  { label: "Mobiles", icon: FaMobileAlt },
  { label: "Jobs", icon: FaBriefcase },
  { label: "Bikes", icon: FaBicycle },
  { label: "Electronics & Appliances", icon: FaTv },
  { label: "Commercial Vehicles & Spares", icon: FaTruck },
  { label: "Furniture", icon: FaCouch },
  { label: "Fashion", icon: FaTshirt },
  { label: "Books, Sports & Hobbies", icon: FaBook },
  { label: "Pets", icon: FaDog },
  { label: "Services", icon: FaConciergeBell },
];

export default function SelectCategory() {
  const [selected, setSelected] = useState(categories[0].label);
  console.log(selected)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded border shadow-sm">
        <div className="border-b p-4 text-xl font-bold text-center">
          POST YOUR AD
        </div>
        <div className="flex divide-x">
          <div className="w-1/2">
            <div className="text-sm font-semibold px-4 py-2 border-b">CHOOSE A CATEGORY</div>
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b hover:bg-gray-100 ${
                    selected === item.label ? 'bg-gray-200 font-medium' : ''
                  }`}
                  onClick={() => setSelected(item.label)}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </div>
                  <IoIosArrowForward className="text-gray-400" />
                </div>
              );
            })}
          </div>

          <div className="w-1/2 p-4 flex items-center text-gray-600 text-lg">
          <button className='w-full h-10 bg-gray-100 hover:bg-gray-200 border-1' onClick={() => {navigate(`/addAds/${selected}`)}}>{selected}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

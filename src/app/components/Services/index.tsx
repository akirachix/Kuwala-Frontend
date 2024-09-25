
import React, { ReactNode } from "react"; 
import { Folder, Utensils, ClipboardList } from 'lucide-react';

interface ServiceItemProps {
  icon: ReactNode; 
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg md:shadow-xl rounded-lg transition-transform transform hover:scale-105 mb-6 md:mb-10">
    {icon}
    <h3 className="text-[25px] font-bold mt-2 mb-2">{title}</h3>
    <p className="text-[18px]">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div  id='services' className="bg-gray-100 py-12 -mb-16 mt-8 " style={{ fontFamily: 'Inter, serif' }}>
      <div className="max-w-7xl mx-auto mt-20 -mb-20 px-4">
        <h2 className="text-4xl font-bold text-center text-[#F8A11B] -mb-10 mt-20">Services</h2>
        <div className="grid grid-cols-1 mt-16 mb-14  sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <ServiceItem
            icon={<Folder className="w-20 h-20 text-[#883418]" />}
            title="Pantry Share"
            description="Share your pantry with loved ones to reduce food waste and build stronger connections."
          />
          <ServiceItem
            icon={<Utensils className="w-20 h-20 text-[#883418]" />}
            title="Recipe Recommendations"
            description="Receive recipes based on what you have in your pantry. Plan your meals efficiently, enjoy delicious dishes, and minimize food waste."
          />
          <ServiceItem
            icon={<ClipboardList className="w-20 h-20 text-[#883418]" />}
            title="Inventory Input"
            description="Select items from the predefined items and, if not available, input manually and organize your ingredients for effortless tracking."
          />
        </div>
      </div>
    </div>
  );
}

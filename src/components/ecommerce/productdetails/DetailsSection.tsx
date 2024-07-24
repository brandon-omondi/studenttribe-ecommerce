// DetailsSection.tsx
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'details',
    label: 'DETAILS',
    content: (
      <div>
        Boasting exquisite workmanship and crafted with timeless elegance, Deniro Devin Men's Formal Shoes guarantee to draw admiring glances. Merging remarkable comfort and effortless ease, these Executive Shoes will leave a lasting mark on any crowd.
      </div>
    ),
  },
  {
    id: 'shipping',
    label: 'SHIPPING & RETURNS',
    content: (
      <div>
        Exchange allowed within 5 Days of Purchase. For wholesale enquiries, please contact us on 0746956359 or email us on customercare@umojashoe.com
      </div>
    ),
  },
  {
    id: 'reviews',
    label: 'REVIEWS',
    content: (
      <div>
        No reviews yet.
      </div>
    ),
  },
  // Add more tabs as needed
];

const DetailsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const renderContent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    return activeTabData ? activeTabData.content : null;
  };

  return (
    <div className="flex  mx-[108px] bg-[#717171] bg-opacity-[12%] mb-20">
      <div className="flex flex-col w-1/4 p-4 font-medium font-['Inter'] text-slate-50 text-opacity-[60%]">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`mb-4 p-2 bg-black bg-opacity-[50%] hover:bg-amber-500 ${activeTab === tab.id ? 'bg-amber-500' : 'bg-gray-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-3/4 p-4 border-l border-amber-500 border-opacity-[60%] font-medium font-['Inter'] text-slate-50 text-opacity-[80%]">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailsSection;

'use client';

import React from 'react';

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.id || '');

  return (
    <div className={`w-full ${className}`}>
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex -mb-px space-x-4 md:space-x-8 whitespace-nowrap pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 md:py-4 px-1 border-b-2 font-medium text-xs md:text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;

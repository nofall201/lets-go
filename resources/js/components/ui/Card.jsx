import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div>
            <div className="flex space-x-4 border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`py-2 px-4 ${
                            activeTab === tab.name ? 'border-b-2 border-blue-500' : ''
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs.map((tab) =>
                    activeTab === tab.name ? <div key={tab.name}>{tab.content}</div> : null
                )}
            </div>
        </div>
    );
};

export default Tabs;

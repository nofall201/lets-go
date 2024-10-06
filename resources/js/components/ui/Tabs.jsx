// resources/js/components/ui/Tabs.jsx
import React, { useState } from 'react';

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(React.Children.toArray(children)[0].props.name);

    return (
        <div>
            <div className="flex space-x-4 border-b">
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { isActive: child.props.name === activeTab, setActiveTab })
                )}
            </div>
            <div className="mt-4">
                {React.Children.map(children, (child) =>
                    child.props.name === activeTab ? <div key={child.props.name}>{child.props.children}</div> : null
                )}
            </div>
        </div>
    );
};

export const TabsList = ({ children }) => {
    return <div className="flex space-x-4 border-b">{children}</div>;
};

export const TabsTrigger = ({ name, isActive, setActiveTab, children }) => {
    return (
        <button
            onClick={() => setActiveTab(name)}
            className={`py-2 px-4 ${isActive ? 'border-b-2 border-blue-500' : ''}`}
        >
            {children}
        </button>
    );
};

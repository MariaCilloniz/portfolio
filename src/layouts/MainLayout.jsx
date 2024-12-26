import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Menu } from 'lucide-react';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="layout">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <button
                className="nav-toggle"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu />
            </button>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
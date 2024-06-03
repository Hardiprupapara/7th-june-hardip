import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../../wrapers/sidebar/SideBar.jsx';
import Header from '../../wrapers/navbar/Navbar.jsx';

const DefaultLayout = () => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="vh100 d-flex w-100 position-fixed top-0 ">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="flex-grow-1 d-flex flex-column ">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className="p-4  px-lg-4 " style={{ height: "90vh" }} >
                        <div className="">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
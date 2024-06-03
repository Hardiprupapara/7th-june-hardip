import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/comp-logo.png';


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {


    const trigger = useRef(null);
    const sidebar = useRef(null);

    useEffect(() => {

        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);

    }, [sidebarOpen, setSidebarOpen]);


    useEffect(() => {

        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);

    }, [sidebarOpen, setSidebarOpen]);


    return (
        <aside ref={sidebar} style={{ width: '250px' }} className={`sisebar navbar bg-white box-shd ${sidebarOpen ? 'd-block d-lg-none' : 'd-none d-lg-block'}`}>
            <button
                ref={trigger}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                className="sidebar-close-btn mt-3 d-block position-absolute end-0 top-0 bg-transparent text-dark border-0 d-lg-none"
            >
                <i class="bi bi-x-lg fs-3"></i>
            </button>
            <div className='text-center'>
                <div className='sidebar-logo pb-4 pt-3 border-bottom'>
                    <img src={logo} alt="Company Logo" className='img-fluid' />
                </div>
                <div className='px-3 pt-4'>
                    <nav>
                        <ul className="menu-aside p-0">
                            <li className="menu-item">
                                <NavLink className="menu-link" to='/'>
                                    <i className="icon fas fa-home"></i>
                                    <span className='d-inline-block pt-1 ms-2'>
                                        <i class="bi bi-house-door"></i> Dashbord
                                    </span>
                                </NavLink>
                            </li>
                            <hr />
                            <li className="menu-item">
                                <NavLink to='/AddUser' className="menu-link">
                                    <i className="icon fas fa-shopping-bag"></i>
                                    <span className='d-inline-block pt-1 ms-2'>
                                        <i class="bi bi-person-add"></i> Add User
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

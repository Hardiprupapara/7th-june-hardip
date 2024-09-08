import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const ProSideBar = ({ collapsed }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', minHeight: '400px' }}>
            <Sidebar
                backgroundColor="#0b2948db"
                image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
                collapsed={collapsed} transitionDuration={1000} collapsedWidth="80px">
                <Menu
                    className='py-2'
                    menuItemStyles={{
                        button: {
                            color: '#ffffff',
                            ':hover': {
                                backgroundColor: '#d3d3d330', // Gray background on hover
                                // color: '#000000', // Black text color on hover
                            },
                        },
                        subMenuContent: {
                            backgroundColor: '#0b2948db', // Same as sidebar background color
                            color: '#ffffff',
                        },
                    }}
                    transitionDuration={1000}
                    closeOnClick
                >
                    <div>
                        <img
                            className='logo p-2 mx-3'
                            src={collapsed ? logo : logo}
                            alt="Logo"
                            style={collapsed ? { width: '60px', height: 'auto' } : { width: '60px', height: 'auto' }}
                        />
                    </div>

                    <NavLink to='/'>
                        <MenuItem icon={<i class="bi bi-house-door"></i>}>
                            Home
                        </MenuItem>
                    </NavLink>
                    <NavLink to='/Products'>
                        <MenuItem icon={<i class="bi bi-bag"></i>}>
                            Products
                        </MenuItem>
                    </NavLink>
                    <SubMenu active
                        label="CRUD"
                        icon={<i class="bi bi-2-circle"></i>}
                    >
                        <NavLink to='/Create'><MenuItem>Create</MenuItem></NavLink>
                        <NavLink to='/Read'><MenuItem>Read</MenuItem></NavLink>
                        <NavLink to='/Update'><MenuItem>Update</MenuItem></NavLink>
                        <NavLink to='/CrudWithLocal'><MenuItem>CrudWithLocal</MenuItem></NavLink>
                    </SubMenu>
                    <SubMenu active
                        label="Hooks"
                        icon={<i class="bi bi-3-circle"></i>}
                    >
                        <NavLink to='/UseRefHook'><MenuItem>UseRefHook</MenuItem></NavLink>
                        <NavLink to='/UseMemoHook'><MenuItem>UseMemoHook</MenuItem></NavLink>
                        <NavLink to='/UseContextHook'><MenuItem>UseContextHook</MenuItem></NavLink>
                    </SubMenu>
                    <SubMenu active
                        label="Form"
                        icon={<i class="bi bi-3-circle"></i>}
                    >
                        <NavLink to='/FormWithYup'><MenuItem>FormWithYup</MenuItem></NavLink>
                        <NavLink to='/FormWithValidation'><MenuItem>FormWithValidation</MenuItem></NavLink>
                    </SubMenu>
                    <NavLink to='/ApiCalling'><MenuItem>ApiCalling</MenuItem></NavLink>
                    <NavLink to='/ImageCursol'><MenuItem>ImageCursol</MenuItem></NavLink>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default ProSideBar;
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/Admin/DashBoard/DashBoard';

const AdminLayout = () => {
    return (
        <div className='grid grid-cols-4'>
            <DashBoard className="col-span-1"></DashBoard>
            <Outlet className="col-span-3"></Outlet>
        </div>
    );
};

export default AdminLayout;
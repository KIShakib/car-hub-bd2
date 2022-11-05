import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../Pages/Admin/DashBoard/DashBoard';

const AdminLayout = () => {
    return (
        <div className="flex">
            <DashBoard></DashBoard>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;
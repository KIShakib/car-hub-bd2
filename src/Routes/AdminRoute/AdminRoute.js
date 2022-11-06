import React, { useContext } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (user?.email === "admin@gmail.com") {
        return children
    }
    if (loading) {
        return <div className='w-full h-full flex justify-center items-center'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }

    return <Navigate to="/login"></Navigate>
};

export default AdminRoute;
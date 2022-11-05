import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import {RouterProvider} from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import { router } from './Routes/Route/Route';

function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`w-[80%] mx-auto ${theme && "bg-gray-900"}`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;

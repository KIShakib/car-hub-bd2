import {RouterProvider} from 'react-router-dom';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className='w-[80%] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

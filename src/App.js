import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Exam from './components/Exam/Exam';
import Statistics from './components/Statistics/Statistics';
import FourOFour from './components/FourOFour/FourOFour';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'topics',
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'exam',
          element: <Exam></Exam>
        },
        {
          path: '*',
          element: <FourOFour></FourOFour>
        }
      ]
    }

  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
import React from 'react'
import { BrowserRouter as Router , Route , Routes  , Link} from 'react-router-dom';
import "./App.css";

import ProductFilterList from './Component/ProductFilterList';
import MemorizedFactorial from './Component/MemorizedFactorial';
import Parent from './Component/Prevent Re-render with useCallback/Parent';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import NotFound from './Component/NotFound';
import BlogList from './Component/DynamicRouting/BlogList';
import BlogPost from './Component/DynamicRouting/BlogPost';
import LazyCharLoader from './Component/Lazy Loaded Component/LazyCharLoader';
import SortableUserList from './Component/SortableUserList';
import PaginationList from './Component/PaginationList';
import Sidebar from './Component/SideBar';
import Dashboard from './Component/Page/Dashboard';
import Profile from './Component/Page/Profile';
import Setting from './Component/Page/Setting';


const App = () => {
  return (
    <div>
      <h2 className='style'>Product Filter List</h2>
      <ProductFilterList />
            <h2 className='style'>  Memorized Expensive Calculator</h2>
            <MemorizedFactorial />
             <h2 className='style'> Prevent Re-render with useCallback</h2>
            <Parent/>
              <h2 className='style'> React Lazy Loading</h2>
        <LazyCharLoader />
              <h2 className='style'> User List Sorted</h2>

             <SortableUserList />
             <h2 className='style'> Pagination with Limited Items</h2>

             <PaginationList />
            
            <Router >
              <h2 className = 'style' >React Router Demo </h2>

              {/*Navigation Bar */}
              <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/contact">Contact</Link>|{" "}
                <Link to = "/blog">Blog</Link>
              </nav>
              <hr />
              
              {/*Routes Defination  */}
              <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/about'element={<About/>}/>
                <Route path='/contact'element={<Contact/>}/>
                <Route path="*"element={<NotFound/>}/>
                <Route path="/blog"element={<BlogList/>}/>
                <Route path ="/post/:id"element = {<BlogPost/>}/>
              </Routes>
            </Router>
            
            <hr />
            <Router>
                <div>
                  <Sidebar />
                  <main>
                    <Routes>
                     <Route path='/'element = {<Dashboard />}/>
                     <Route path='/settings'element = {<Setting />}/>
                     <Route path='/profiles'element = {<Profile />}/>
                    </Routes>
                  </main>
                </div>




            </Router>



    </div>
  );
};

export default App;

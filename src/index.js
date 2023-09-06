import React from 'react';
import ReactDOM from 'react-dom/client';
// import Dashboard from './components/sidebar/Dashboard';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useActionData, useParams } from 'react-router-dom';
import ErrorPage from './components/error/error';
import Carts from './components/carts/carts';
import Users from './components/users/users';
import Posts from './components/posts/userposts';
import ToDos from './components/todos/todos';
import Quotes from './components/quotes/quotes';
import Contact from './components/contact/contact';
import Products from './components/products/products';
import Home from './components/home/home';
import Sidemenu from './components/sidemenu/Sidemenu';
import "./css/sidemenu.css"
import "./css/Dashboard.css"
import ThemeChange from './components/sidemenu/themeChange';
import Wrapper from './components/sidemenu/Wrapper';
import Login from './components/login/login1';
import RegistrationForm from './components/singup/singup';
import LikedPostChange from './components/posts/LikedContext';
import ShowLikedPost from './components/posts/ShowLikedPost';
import SomeProduct from './components/products/SomeProduct';
import LogInUser from './components/login/LoginContext';
import LoggedUser from './components/posts/LoggedUser';
import User from './components/users/user';
import ProtectedRoutes from './components/home/ProtectedRoutes';
import Blogs from './components/blogs/blogs';
import Students from './components/students/Students';
import Background from './components/sidemenu/Background';
import GetFivePosts from './components/posts/GetFivePosts';
import { Provider } from 'react-redux';
import App from './components/redux/reducers/App';
import store from './components/redux/store';
// import Sidemenu from './components/sidemenu/Sidemenu';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/product/product",
//         element: <Product />,
//       },
//       {
//         path: "/carts/carts",
//         element: <Carts />,
//       },
//       {
//         path: "/users/users",
//         element: <Users />,
//       },
//       {
//         path: "/posts/posts",
//         element: <Posts />,
//       },
//       {
//         path: "/todos/todos",
//         element: <ToDos />,
//       },
//       {
//         path: "/quotes/quotes",
//         element: <Quotes />,
//       },
//       {
//         path: "/contact/contact",
//         element: <Contact />,
//       },
//     ]
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeChange>
        <LikedPostChange>
          <LogInUser>
            <BrowserRouter>
              <Wrapper>
                <div className='layout'>
                  <Background />
                  <div><Sidemenu /></div>
                  <Routes>
                    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
                    <Route path='/' element={<ProtectedRoutes />}>
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<SomeProduct />} />
                      <Route path="/carts" element={<Carts />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/users/:id" element={<LoggedUser />} />
                      <Route path="/logget/user/:id" element={<User />} />
                      <Route path="/posts" element={<Posts />} />
                      <Route path="/showlikedpost" element={<ShowLikedPost />} />
                      <Route path="/todos" element={<ToDos />} />
                      <Route path="/blogs" element={<Blogs />} />
                    </Route>
                    <Route path="/fiveposts" element={<GetFivePosts />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/quotes" element={<Quotes />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<RegistrationForm />} />
                    <Route path="/counter" element={<App />} />
                  </Routes>
                </div>
              </Wrapper>
            </BrowserRouter>
          </LogInUser>
        </LikedPostChange>
      </ThemeChange>
    </Provider>
  </React.StrictMode >
);


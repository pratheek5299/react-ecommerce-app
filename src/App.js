import { Provider } from 'react-redux';
import AddProduct from './components/AddProduct/AddProduct';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './redux/store';
import ProductDetails from './components/ProductDetailsPage/ProductDetails';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {

  // creating a router
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/>, errorElement: <ErrorPage/>, children: [
      {index: 'true', element: <Home/>},
      {path: '/product', children: [
        {index: true, element: <Products/>},
        {path: '/product/:id', element: <ProductDetails/>}
      ]},
      {path: 'add-product', element: <AddProduct/>},
      {path: 'cart', element: <Cart/>}
    ]}
  ])
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;

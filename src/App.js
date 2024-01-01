import './index.css';
import { Routes,Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products/:pid" element={<ProductDetailsPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    </>
  );
}

export default App;

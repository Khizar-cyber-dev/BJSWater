import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/productDetails';
import LottieComponent from './components/LottieComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/lottie" element={<LottieComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

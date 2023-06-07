import { ChakraProvider } from '@chakra-ui/react';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Buy from './pages/Buy';
import Contact from './pages/Contact';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
        <Route path='/buy' element={<Buy />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Products />} />
      </Routes>
      
    </ChakraProvider>
  );
}

export default App;

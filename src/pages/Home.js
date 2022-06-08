import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer.js';
import NavBar from '../components/Navbar.js';
import Cart from '../components/Cart';
import CartContextProvider from '../components/CartContex.js';

const Home = () => {
    return (
        <div>
            <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route  path='/' element={<ItemListContainer />} />
                    <Route  path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default Home;
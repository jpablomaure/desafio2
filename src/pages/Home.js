import NavBar from '../components/Navbar.js';
import ItemListContainer from '../components/ItemListContainer.js';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer.js';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route  path='/' element={<ItemListContainer />} />
                    <Route  path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default Home;
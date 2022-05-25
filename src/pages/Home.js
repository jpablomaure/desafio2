import NavBar from '../components/Navbar.js';
import ItemListContainer from '../components/ItemListContainer.js';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Carrito de compras" />
        </div>
    )
};

export default Home;
import NavBar from '../components/Navbar.js';
// import ItemListContainer from '../components/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer.js';

const Home = () => {
    return (
        <div>
            <NavBar />
            {/* <ItemListContainer greeting="Carrito de compras" /> */}
            <ItemDetailContainer />
        </div>
    )
};

export default Home;
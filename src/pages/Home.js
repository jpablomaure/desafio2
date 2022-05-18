import NavBar from '../components/Navbar.js';
import ItemListContainer from '../components/ItemListContainer.js';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="ItemListContainer" />
        </div>
    )
};

export default Home;
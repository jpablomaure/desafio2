// import './style.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.js';

function NavBar() {

    return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light ">
            <Link to='/'><div className="navbar-brand" >Soy Bohemia </div></Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/'><div className="btn btn-sm btn-outline-secondary" >HOME</div></Link>
                    <Link to='/'><div className="btn btn-sm btn-outline-secondary" >NOSOTROS</div></Link>
                    <Link to='/'><div className="btn btn-sm btn-outline-secondary" >TIENDA</div></Link>
                    <Link to='/'><div className="btn btn-sm btn-outline-secondary" >SERVICIOS</div></Link>
                    <Link to='/'><div className="btn btn-sm btn-outline-secondary" >CONTACTO</div></Link>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link to='/categoria/2'><div className="btn btn-sm btn-outline-secondary">MUEBLES</div></Link>
                <Link to='/categoria/3'><div className="btn btn-sm btn-outline-secondary">ACCESORIOS</div></Link>
                </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
        <nav className="navbar navbar-expand-sm navbar-light ">



        </nav>

    </>
        );
}       

export default NavBar;

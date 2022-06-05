import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link className='logo' to="/">APPFLIX</Link>
            <Link className='favoritos' to="/favoritos">Meus Filmes</Link>
        </div>
    )
}

export default Header;

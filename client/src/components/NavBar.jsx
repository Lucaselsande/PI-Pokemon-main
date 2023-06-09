import style from './styles/Todos.module.css'
import SearchBar from './SearchBar';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ onSearch }) => {
    return (
        <div className={style.seach}>
            <NavLink to='/About'>
                <button>About</button>
            </NavLink>

            <Link to='/home'>
                <button>home</button>
            </Link>
            <Link to='/'>
                <button>Log out</button>
            </Link>
            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>
            <NavLink to='/create'>
                <button>CREAR</button>
            </NavLink>
            {/* <SearchBar onSearch={onSearch} /> */}
        </div>
    );
};

export default NavBar
import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className={style.buttonBar}>
            <NavLink to='/About' className={style.navLink}>
                <button className={style.button}>About</button>
            </NavLink>

            <Link to='/home' className={style.link}>
                <button className={style.button}>Home</button>
            </Link>

            <Link to='/' className={style.link}>
                <button className={style.button}>Log out</button>
            </Link>

            <NavLink to='/favorites' className={style.navLink}>
                <button className={style.button}>Favorites</button>
            </NavLink>

            <NavLink to='/create' className={style.navLink}>
                <button className={style.button}>CREAR</button>
            </NavLink>
        </div>

    );
};

export default NavBar
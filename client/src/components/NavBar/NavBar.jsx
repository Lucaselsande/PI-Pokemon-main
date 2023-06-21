import style from './NavBar.module.css'
import { Link, NavLink } from 'react-router-dom';
import linkedin from './linkedin.png';
import github from './github.png'



const NavBar = () => {
    return (
        <div className={style.buttonBar}>

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

            <Link to='/modify' className={style.link}>
                <button className={style.button}>Modify</button>
            </Link>

            <a href="https://www.linkedin.com/in/lucas-sande-5a74b720b/" target="_blank">
                <img src={linkedin} alt="icono-linkedin" className={style.icon} />
            </a>

            <a href="https://github.com/Lucaselsande" target="_blank">
                <img src={github} alt="icono-github" className={style.icon} />
            </a>
        </div>

    );
};

export default NavBar
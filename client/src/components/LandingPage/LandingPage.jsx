import style from './LandingPageStyle.module.css';
import { Link } from 'react-router-dom';


const Form = () =>{
        return(
            <div className={style.landingPage}> 
            <Link to='/home'>
                <button className={style.button}>Home</button>
            </Link>
            </div>
        )
};
export default Form
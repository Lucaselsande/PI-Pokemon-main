import { Component } from 'react';
import style from './LandingPageStyle.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class Form extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.landingPage}>
                <Link to='/home'>
                    <button className={style.button}>Home</button>
                </Link>
            </div>
        )
    }
}


export default connect(null, null)(Form)

//mapStateToProps - mapDispatchToProps
// ComponentDidMount(){}
//     ComponentDidUpdate()
//     ComponentWillUnmount()
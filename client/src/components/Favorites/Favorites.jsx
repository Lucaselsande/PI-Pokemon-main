import { connect } from 'react-redux'
import Card from '../Card/Card';

const Favorites = ({ myFavorites }) => {

    return (
        <div>
            <div >
                {myFavorites?.map(({ id, name, image, types }) => (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        types={types.join(', ')}
                    />
                ))}
            </div>
        </div>
    )
};
// traigo el state de myFavorites, siempre que lo haga asi lo tengo que pasar por props
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)
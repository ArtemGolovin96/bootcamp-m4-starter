import React, { Component } from 'react';
import './Favorites.css';
import store from '../../redux/store';
import { connect } from 'react-redux';

class Favorites extends Component {
    state = {
        id: 0
    }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {
                    this.props.moviesFavorites.map((el) => {
                        return <p key={el.imdbID}>{el.Title}</p>
                    })
                    }
                </ul>
                <button type="button" className="favorites__save" onClick={() => {
                    this.setState({id: this.state.id + 1})
                }}>Сохранить список</button>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        moviesFavorites: state.moviesFavorites
    };
};


 
export default connect(mapStateToProps)(Favorites);
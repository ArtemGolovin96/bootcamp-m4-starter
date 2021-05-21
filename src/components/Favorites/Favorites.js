import React, { Component } from 'react';
import './Favorites.css';
import store from '../../redux/store';
import { connect } from 'react-redux';
import { deleteFromFavAction, deleteFromFavBUTTON_FALSE, inputFavoriteListChangeHandlerAction } from '../../redux/action';
import axios from 'axios';


class Favorites extends Component {


    onClickDel = (id) => {
        this.props.addtoFavoriteActionButtonFALSEProps(id)
        this.props.deleteToFavProps(id)
    }

    onClickPost = () => {
        const arr = this.props.moviesFavorites.map((el) => {
            return el.imdbID
        })
        const imuteDataTitle = this.props.titleFavorites
        const postData = {
            "headers": {
                "content-type": "application/json",
            },
            "title": imuteDataTitle,
            "movies": arr   
        }
        axios.post(`https://acb-api.algoritmika.org/api/movies/list `, {postData})
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }

    render() { 
        return (
            <div className="favorites">
                <input 
                value={this.props.titleFavorites} 
                onChange={(e) => { this.props.inputFavoriteListChangeHandlerProps(e)}}
                className="favorites__name" />
                <ul className="favorites__list">
                    {
                    this.props.moviesFavorites.map((el) => {
                        return <h1 className="h1_favorite" key={el.imdbID}>{el.Title}({el.Year})   <button className="delbutton" onClick={() => {this.onClickDel(el.imdbID)}}>
                        ❌</button></h1>
                    })
                    }
                </ul>
                <button type="button" className="favorites__save" onClick={() => {
                    this.onClickPost()
                }}>Сохранить список</button>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        moviesFavorites: state.moviesFavorites,
        titleFavorites: state.titleFavorites,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteToFavProps: (id) => {dispatch(deleteFromFavAction(id))},
        addtoFavoriteActionButtonFALSEProps: (id) => {dispatch(deleteFromFavBUTTON_FALSE(id))},
        inputFavoriteListChangeHandlerProps: (e) => {dispatch(inputFavoriteListChangeHandlerAction(e.target.value))}
    }
}


 
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
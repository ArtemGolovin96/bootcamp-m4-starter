import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import store from "../../redux/store";
import { addtoFavoriteAction } from "../../redux/action";
import { connect } from "react-redux";

class Movies extends Component {

    onClickToFavorite = (id) => {
        this.props.addtoFavoriteActionProps(id);
        // console.log(this.props.moviesFavorites)
    }


  render() {
    return (
      <ul className="movies">
        {
        this.props.moviesSearch.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <article className="movie-item">
              <img
                className="movie-item__poster"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="movie-item__info">
                <h3 className="movie-item__title">
                  {movie.Title}&nbsp;({movie.Year})
                </h3>
                <button type="button" className="movie-item__add-button" onClick={() => this.onClickToFavorite(movie)}>
                  Добавить в список
                </button>
              </div>
            </article>
          </li>
        ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesSearch: state.moviesSearch,
    moviesFavorites: state.moviesFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addtoFavoriteActionProps: (id) => {dispatch(addtoFavoriteAction(id))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

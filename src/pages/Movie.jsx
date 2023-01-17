import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "../components/UI/SingleBook";
function Movie({ setIsFiltered }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function direct() {
    navigate("/movies");
    setIsFiltered(false);
  }
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  async function fetchMovie() {
    setLoading(false);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=91625aff`
    );
    setMovie(data);
    setLoading(true);
  }
  useEffect(() => {
    fetchMovie();
  }, []);

  const response = Object.values(movie);

  return (
    <div>
      <Nav></Nav>
      <>
        <div className="row">
          <div className="container">
            <div className="back__wrapper" onClick={direct}>
              <ArrowBackIcon></ArrowBackIcon> <span className="back">Back</span>
            </div>

            {loading === true ? (
              <SingleBook response={response}></SingleBook>
            ) : (
              <div className="select__container">
                <div className="book__img--skeleton"></div>
                <div className="info__wrapper">
                  <div className="book__title--skeleton skeleton"></div>
                  <div className="book__rating--skeleton skeleton"></div>
                  <div className="book__price--skeleton skeleton"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Movie;

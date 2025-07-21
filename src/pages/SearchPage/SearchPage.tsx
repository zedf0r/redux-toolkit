import { useEffect, useState } from "react";
import style from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { fetchApi } from "../../api/fetchApi";
type TypeFilmData = {
  Poster: string;
  Title: string;
  imdbID: string;
};

export const SearchPage = () => {
  const [data, setData] = useState<TypeFilmData[] | null>(null);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const responseData = async (name: string) => {
    return fetchApi({
      url: `http://www.omdbapi.com/?apikey=64405bd2&s=${name}`,
      method: "GET",
    })
      .then((response) => {
        if (response.Response === "False") {
          setError(true);
          return;
        }

        setData(response.Search);
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (filter.length !== 0) {
      const timer = setTimeout(() => {
        setLoading(true);
        setError(false);
        responseData(filter);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [filter]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const showComponent = () => {
    if (loading) {
      return <p className={style.loading}>Loading...</p>;
    }
    if (error) {
      return <p className={style.error}>Movie not found!</p>;
    }

    return (
      <div className={style.container}>
        {data?.map((film) => {
          return (
            <Link
              key={film.imdbID}
              to={`/${film.imdbID}`}
              className={style.card}
            >
              <div className={style.imgBox}>
                <img className={style.img} src={film.Poster} alt="Постер" />
              </div>

              <h2 className={style.cardTitle}>{film.Title}</h2>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={style.box}>
        <input
          type="text"
          className={style.input}
          value={filter}
          onChange={(event) => {
            changeHandler(event);
          }}
        />
      </div>
      {data ? showComponent() : ""}
    </>
  );
};

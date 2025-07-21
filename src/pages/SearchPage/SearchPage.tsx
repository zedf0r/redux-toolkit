import { useEffect, useState } from "react";
import classes from "./SearchPage.module.css";
import { fetchApi } from "../../api/fetchApi";
type TypeFilmData = {
  Poster: string;
  Title: string;
};

export const SearchPage = () => {
  const [data, setData] = useState<TypeFilmData>({ Poster: "", Title: "" });
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const responseData = async (name: string) => {
    return fetchApi({
      url: `http://www.omdbapi.com/?apikey=64405bd2&t=${name}`,
      method: "GET",
    })
      .then((response) => {
        if (response.Response === "False") {
          setError(true);
          return;
        }
        setData(response);
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
      }, 1000);
      console.log(`Привязался`);
      return () => {
        console.log(`Отвязался`);
        clearTimeout(timer);
      };
    }
  }, [filter]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const showComponent = () => {
    if (loading) {
      return <p className={classes.loading}>Loading...</p>;
    }
    if (error) {
      return <p className={classes.error}>Movie not found</p>;
    }

    return (
      <div className={classes.card}>
        <div>
          <img src={data.Poster} alt="Постер" />
        </div>

        <h2 className={classes.cardTitle}>{data.Title}</h2>
      </div>
    );
  };

  return (
    <>
      <div className={classes.box}>
        <input
          type="text"
          className={classes.input}
          value={filter}
          onChange={(event) => {
            changeHandler(event);
          }}
        />
      </div>
      {showComponent()}
    </>
  );
};

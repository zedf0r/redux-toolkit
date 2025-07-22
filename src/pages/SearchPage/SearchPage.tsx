import { useEffect, useRef, useState } from "react";
import style from "./SearchPage.module.css";
import { fetchApi } from "../../api/fetchApi";
import { added } from "../../services/favoriteFilm/favoriteFilmSlice";
import { Button, Card } from "../../components";
import type { TypeFilmParams } from "../../types";

export const SearchPage = () => {
  const [data, setData] = useState<TypeFilmParams[] | null>(null);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const responseData = async (name: string) => {
    setError(false);
    setLoading(true);
    return fetchApi({
      url: `http://www.omdbapi.com/?apikey=64405bd2&s=${name}`,
      method: "GET",
    })
      .then((response) => {
        if (response.Response === "False") {
          throw Error("Movie not found!");
        }

        setData(response.Search);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      responseData(filter);
    }, 300);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
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
            <Card key={film.imdbID} film={film}>
              <Button action={added} film={film}>
                В избранное
              </Button>
            </Card>
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

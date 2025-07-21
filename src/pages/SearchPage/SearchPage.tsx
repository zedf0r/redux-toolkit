import { useState } from "react";
import classes from "./SearchPage.module.css";

export const SearchPage = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className={classes.box}>
      <input
        type="text"
        className={classes.input}
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
    </div>
  );
};

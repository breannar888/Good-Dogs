import React, { useState } from "react";
import Read from "./Read";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import usePopup from "../context/Context";
import { Button, TextField, Typography } from "@mui/material";
import "../styles/search.css";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    const result = e.target.value.toLowerCase();
    setInputText(result);
  };

  const { didUpdate } = usePopup();

  return (
    <div>
      <Typography sx={{ textAlign: "center", p: "2%" }} variant="h3">
        Doggies
      </Typography>
      <div className="search-wrap">
        <TextField
          sx={{ width: "50%" }}
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          label="Search"
        ></TextField>
        <div className="add-btn">
          <Link to="create">
            <Button color="secondary" variant="contained">
              Add Dog
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Read input={inputText} />
      </div>
      <div>
        <Popup />
      </div>
    </div>
  );
};

export default Search;

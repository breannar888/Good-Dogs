import React, { useEffect, useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import usePopup from "../context/Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "../styles/form.css";

const Update = () => {
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [owner, setOwner] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [id, setID] = useState(null);

  const redirect = useNavigate();
  const { setDidUpdate, setDogAPI } = usePopup();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setDogName(localStorage.getItem("Dog Name"));
    setDogBreed(localStorage.getItem("Dog Breed"));
    setDogSize(localStorage.getItem("Dog Size"));
    setDogImage(localStorage.getItem("Dog Image"));
    setOwner(localStorage.getItem("Owner"));
    setDogDescription(localStorage.getItem("Dog Description"));
  }, []);

  const updateDogAPI = () => {
    axios
      .put(`https://624326b7b6734894c15b957a.mockapi.io/dogs/${id}`, {
        dogName,
        dogBreed,
        dogSize,
        owner,
        dogDescription,
        dogImage,
      })
      .then(() => {
        redirect("/");
        setDidUpdate(true);
        reloadData();
      });
  };

  const reloadData = () => {
    axios
      .get("https://624326b7b6734894c15b957a.mockapi.io/dogs")
      .then((reloadData) => {
        setDogAPI(reloadData.data);
      });
  };

  return (
    <div className="form-wrap">
      <Typography variant="h4">Update</Typography>
      <FormControl sx={{ width: "60%" }}>
        <img src={dogImage} alt={dogName} />
        <TextField
          onChange={(e) => {
            setDogImage(e.target.value);
          }}
          label="Image URL:"
          id="image"
          name="image"
          type="text"
          variant="outlined"
          value={dogImage}
          sx={{ mb: "1%", mt: "2%" }}
        ></TextField>
        <TextField
          onChange={(e) => {
            setDogName(e.target.value);
          }}
          label="Dog Name:"
          id="name"
          name="name"
          type="text"
          variant="outlined"
          value={dogName}
          sx={{ mb: "1%", mt: "1%" }}
        ></TextField>

        <TextField
          onChange={(e) => {
            setDogBreed(e.target.value);
          }}
          label="Dog Breed:"
          id="breed"
          name="breed"
          type="text"
          variant="outlined"
          value={dogBreed}
          sx={{ mb: "1%", mt: "1%" }}
        ></TextField>
        <TextField
          onChange={(e) => {
            setOwner(e.target.value);
          }}
          label="Owner Name:"
          id="owner"
          name="owner"
          type="text"
          variant="outlined"
          value={owner}
          sx={{ mb: "1%", mt: "1%" }}
        ></TextField>
        <TextField
          select
          onChange={(e) => {
            setDogSize(e.target.value);
          }}
          label="Dog Size:"
          id="size"
          defaultValue="SM"
          value={dogSize}
          variant="outlined"
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
        >
          <MenuItem value={"XS"}>Extra Small</MenuItem>
          <MenuItem value={"SM"}>Small</MenuItem>
          <MenuItem value={"MD"}>Medium</MenuItem>
          <MenuItem value={"LG"}>Large</MenuItem>
          <MenuItem value={"XL"}>Extra Large</MenuItem>
        </TextField>
        <TextField
          onChange={(e) => {
            setDogDescription(e.target.value);
          }}
          label="Description:"
          id="description"
          name="description"
          type="text"
          variant="outlined"
          value={dogDescription}
          multiline
          rows={4}
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
        ></TextField>
        <div className="form-action-wrap">
          <Button
            color="secondary"
            onClick={updateDogAPI}
            type="submit"
            variant="contained"
          >
            Update
          </Button>
          <Link to="/">
            <Button color="primary" variant="outlined">
              Cancel
            </Button>
          </Link>
        </div>
      </FormControl>
    </div>
  );
};

export default Update;

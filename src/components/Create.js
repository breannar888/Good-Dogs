import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useDogs from "../context/Context";
import { Link } from "react-router-dom";
import "../styles/form.css";

const Create = () => {
  const redirect = useNavigate();

  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [owner, setOwner] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [id, setID] = useState(null);
  
  const {
    setDidUpdate,
    setDogAPI,
  } = useDogs();

  const postData = () => {
    axios
      .post(`https://624326b7b6734894c15b957a.mockapi.io/dogs`, {
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
      <Typography variant="h4">Create</Typography>
      <FormControl sx={{ width: "60%" }}>
        <TextField
          onChange={(e) => {
            setDogName(e.target.value);
          }}
          label="Dog Name:"
          id="name"
          name="name"
          type="text"
          variant="outlined"
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
        ></TextField>
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
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
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
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
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
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
        ></TextField>
        <TextField
          select
          onChange={(e) => {
            setDogSize(e.target.value);
          }}
          label="Dog Size:"
          id="size"
          defaultValue="Small"
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
          multiline
          rows={4}
          sx={{ mb: "1%", mt: "1%", textAlign: "left" }}
        ></TextField>
        <div className="form-action-wrap">
          <Button
            color="secondary"
            onClick={postData}
            type="submit"
            variant="contained"
          >
            Submit
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

export default Create;

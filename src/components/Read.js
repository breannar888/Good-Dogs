import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import usePopup from "../context/Context";
import "../styles/read.css";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

const Read = (props) => {
  const { setDidUpdate, dogAPI, setDogAPI } = usePopup();

  useEffect(() => {
    axios
      .get("https://624326b7b6734894c15b957a.mockapi.io/dogs")
      .then((response) => {
        setDogAPI(response.data);
      });
  }, []);

  const filterData = dogAPI.filter((dog) => {
    if (props.input === "") {
      return dog;
    } else {
      return dog.dogName.toLowerCase().includes(props.input);
    }
  });

  const setData = (doggie) => {
    let { id, dogName, dogBreed, dogSize, owner, dogDescription, dogImage } =
      doggie;
    localStorage.setItem("ID", id);
    localStorage.setItem("Dog Name", dogName);
    localStorage.setItem("Dog Image", dogImage);
    localStorage.setItem("Dog Breed", dogBreed);
    localStorage.setItem("Dog Size", dogSize);
    localStorage.setItem("Owner", owner);
    localStorage.setItem("Dog Description", dogDescription);
    console.log(doggie);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://624326b7b6734894c15b957a.mockapi.io/dogs/${id}`)
      .then(() => {
        reloadData();
      });
  };

  const reloadData = () => {
    axios
      .get("https://624326b7b6734894c15b957a.mockapi.io/dogs")
      .then((reloadData) => {
        setDogAPI(reloadData.data);
        setDidUpdate(true);
      });
  };

  return (
    <Grid container spacing={2} direction="row" align="center" justify="center">
      {filterData.map((doggie) => (
        <Grid key={doggie.dogName} item xs={6} sm={6} md={4}>
          <Card key={doggie.dogName} sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="220"
              image={doggie.dogImage}
              alt={doggie.dogName}
            />
            <CardContent>
              <Typography variant="h5">{doggie.dogName}</Typography>
              <Typography sx={{ color: "#848484" }}>
                {doggie.dogDescription}
              </Typography>
              <Typography>Breed: {doggie.dogBreed}</Typography>
              <Typography>Size: {doggie.dogSize}</Typography>
              <Typography>Owner: {doggie.owner}</Typography>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: "space-between",
              }}
            >
              <Link to="update">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setData(doggie)}
                >
                  Edit
                </Button>
              </Link>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "#ed6c02",
                    color: "white",
                  },
                }}
                color="warning"
                variant="outlined"
                onClick={() => onDelete(doggie.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Read;

import { CurrencyRupee, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllAdsApi } from "../apis/index.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAdDetails } from "../Store/ProductSlice.js";

const CardContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.product.search);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigate = useNavigate();
  const handleOpenAd = (id) => {
    if (!loggedIn) {
      alert("Please Login to view the ad");
      return;
    }
    dispatch(fetchAdDetails(id));
    navigate("/ad");
  };

  const [ads, setads] = useState([]);
  //   console.log("card container rendered");

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await fetchAllAdsApi();
        setads(data.data.data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
    setInterval(fetchdata, 5000);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "1500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1060px",
          display: "flex",
          padding: "20px 0px",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "lightsalmon",
        }}
      >
        <Typography variant="h4">All Products</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1060px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          overflowY: "auto",
          height: "1460px",
          padding: { xs: "0px", sm: "40px" },
          backgroundColor: "whitesmoke",
        }}
      >
        {ads
          .filter((ad) => {
            if (ad.tags.includes(search)) return true;
            return (
              ad.name.includes(search) ||
              ad.subname.includes(search) ||
              ad.description.includes(search)
            );
          })
          .map((ad) => {
            return (
              <Card key={ad._id} sx={{ width: 300, height: 400 }}>
                <CardActionArea onClick={() => handleOpenAd(ad._id)}>
                  <CardMedia
                    component="img"
                    height="300"
                    // src={`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`}
                    // src = {require(`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`).default}
                    src={`https://drive.google.com/thumbnail?id=${ad.img_id[0]}`}
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: "10px 20px 0px 20px" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      {ad.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography component="span" variant="h5">
                        {ad.price}
                      </Typography>
                      <span>
                        <CurrencyRupee />
                      </span>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </Box>
    </Box>
  );
};

export default CardContainer;

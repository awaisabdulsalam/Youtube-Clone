import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const VideoDetail = () => {
  return (
    <Box minHeight="95vh" border="5px solid red">
      <Stack direction={{ xs: "column", md: "row"}} border="5px solid blue">
        <Box flex={1} border="5px solid green">
          <Box sx={{ width: "100%", position: "sticky", top: "85px" }} border="5px solid pink">
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
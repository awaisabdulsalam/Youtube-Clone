import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id])

  if (!videoDetail?.snippet) return "Loading"; 

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount }} = videoDetail;
  return (
    <Box minHeight="95vh" border="5px solid red">
      <Stack direction={{ xs: "column", md: "row"}} border="5px solid blue">
        <Box flex={1} border="5px solid green">
          <Box sx={{ width: "100%", position: "sticky", top: "85px" }} border="5px solid pink">
            <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls />
            <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
            {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{
              color: "#fff"
            }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
              <Typography varient={{ sm: "subtitle1", md: "h6" }} color="#fff">
                {channelTitle}
                <CheckCircle 
                sx={{ fontSize: "12px", color: "gray", ml: "5px"}}
                />
              </Typography>
              </Link>
              <Stack>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
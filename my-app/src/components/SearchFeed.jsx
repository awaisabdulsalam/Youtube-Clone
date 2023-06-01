import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
const SearchFeed = () => {

  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
        <Box p={2} sx={{ overflowY: "auto" , minHeight: "95vh"}}>
        <Typography varient="h4" fontWeight= {900} color="white" mb={3} ml={{ sm: "100px" }}>
          Search Results for <span> {searchTerm} </span> videos   
        </Typography>
        <Box>
          <Box sx={{ mr: { sm: '100px' } }}>
            {<Videos videos={videos} />}
          </Box>
        </Box>
      </Box>
  )
}

export default SearchFeed
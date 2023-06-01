import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
    //  console.log(data.items)
   return setVideos(data.items)
  },
   );
  }, [selectedCategory])

  return (
    <Stack sx = {{flexDirection : { sx: 'column', md: 'row' }}}>
      <Box sx = {{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #e3e3e3', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> 
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff"}}>
          Copyright @Awais
        </Typography>
      </Box>
      {/* <Box p={2} sx={{ overflowY: "auto" , height: "90vh", flex: 2}}>
        <Typography fontWeight="bold" mb={2} sx={{ color: "white"}}>
          {selectedCategory} <span style={{ color: "#FC1503"}}>
            Videos
          </span>
        </Typography>
      </Box> */}
      <Videos videos={videos} />  
    </Stack>
  )
}

export default Feed
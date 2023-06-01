import PropTypes from 'prop-types';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center">
      {videos.map((items, index) => {
       return  (
       <Box key={index}>
          {items.id.videoId && <VideoCard videos={items} />}
          {items.id.channelId && <ChannelCard channelDetail={items} />}
        </Box>
        )
      })}
    </Stack>
  )
}


Videos.propTypes = {
  videos: PropTypes.object.isRequired,
};
// Videos.defaultProps = {
//   videos: {}, // Provide a default object value here or any other appropriate default value
// };

export default Videos
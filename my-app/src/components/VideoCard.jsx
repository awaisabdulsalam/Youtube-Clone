import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { 
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle
    }
    from '../Utils/constants';

const VideoCard = ({ videos: { id: { videoId }, snippet } }) => {
    // console.log(videoId, snippet);
  return (
    <Card sx={{ 
    width: { xl: "100%", sm: "158px", md: "320px"}, 
    boxShadow: "none", 
    borderRadius: "none",
    margin: "10px",
    justifyContent: "center",
    border: "1px solid grey"
    }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
                height: 180,
                width: { xs: "100%", sm: "338px" }
            }}
            >

            </CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px"
    }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color="gray">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{ color: "gray", ml: "5px", fontSize: "12px"}} />
            </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}
VideoCard.propTypes = {
  videos: PropTypes.object.isRequired,
};

export default VideoCard
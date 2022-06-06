import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // console.log(props,"here");
    // const videos = props.videos;
    const videoItems= props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}/>
    });

    return (
        <ul className="col-md-4 list-grouip">
        {props.videos.length}
        {videoItems}
        </ul>
    );
};

export default VideoList;
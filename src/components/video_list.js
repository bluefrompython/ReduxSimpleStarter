import React from 'react';

const VideoList = (props) => {
    // console.log(props,"here");
    // const videos = props.videos;
    return (
        <ul className="col-md-4 list-grouip">
        {props.videos.length}
        </ul>
    );
};

export default VideoList;
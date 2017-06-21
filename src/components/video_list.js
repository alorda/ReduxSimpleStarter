import React from 'react';
import VideoListItem from './video_list_item';

// these props are coming from index.js
const VideoList = (props) => {
    console.log('props: ', props);
    // I believe this is another way to loop through the video array
    const videoItems = props.videos.map((video) => {
        // for each video in the array, we will return...
        return (
        <VideoListItem
            // this came from index js, and we're passing it to grandchild
            onVideoSelect={props.onVideoSelect}
            // we use a key prop to index and optimize
            key={video.etag}
            video={video}
        />
    )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;

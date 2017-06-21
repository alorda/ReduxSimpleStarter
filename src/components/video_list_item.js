import React from 'react';

// we're pulling multiple properties from props, separated by comma
const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video; replaced by ({video})
    // const onVideoSelect = props.onVideoSelect;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        // this is when we use that callback:
        // when user clicks on the <li>, onVideoSelect() is called.
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;

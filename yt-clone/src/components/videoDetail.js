import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoID = video.id.videoId;
  const URL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={URL} />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;

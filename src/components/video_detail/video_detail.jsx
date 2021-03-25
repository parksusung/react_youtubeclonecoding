import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = ({video}) => (
    <section className={styles.detail}>
<iframe type="text/html" width="100%" height="480" title="youtube video player"
  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  <h2>
    {video.snippet.title}
  </h2>
  <h3>
        {video.snippet.channelTitle}
  </h3>
  <pre>
      {video.snippet.description}
  </pre>
    </section>
    );

export default VideoDetail;
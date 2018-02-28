import React from 'react';

import VideosList from '../../../../widgets/VideosList/videosList';

const videosMain =()=>(
    <div>
       <VideosList
            type="card"
            title={false}
            loadmore={true}
            start={2}
            amount={6}
       />
    </div>
)
export default videosMain;
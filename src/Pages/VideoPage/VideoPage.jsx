import React from 'react'
import VideoPlayer from '../../Components/Video';

class VideoPage extends React.Component {

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <VideoPlayer videoId={this.props.match.params.id} />
            </div>
        )
    }
}

export default VideoPage
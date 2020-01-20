import React from 'react'
import VideoPlayer from '../../Components/Video';

class VideoPage extends React.Component {

    constructor() {
        super()
        this.state = {
            videInfo: []
        }
    }

    loadVideoInfo = async () => {
        // const
    }

    render() {
        console.log(this.props.match.params.testValue);
        return (
            <div>
                <VideoPlayer videoId={this.props.match.params.id} />
            </div>
        )
    }
}

export default VideoPage
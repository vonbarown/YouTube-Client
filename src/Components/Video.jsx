import React, { Component } from 'react'
import YouTube from 'react-youtube'

class VideoPlayer extends Component {


    render() {
        const opts = {
            height: '200',
            width: '440',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId={this.props.videoId}
                opts={opts}
                onReady={this._onReady}
            />
        );

    }

}

export default VideoPlayer
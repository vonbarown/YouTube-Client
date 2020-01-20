import React from 'react'

class VideoPage extends React.Component {
    constructor() {
        super()

        this.state = {
            videoId: {}
        }

    }

    componentDidMount() {
        this.setState({
            videoId: this.props.match.params.id
        })
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>

            </div>
        )
    }
}

export default VideoPage
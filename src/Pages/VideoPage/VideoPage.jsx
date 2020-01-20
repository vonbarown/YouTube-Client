import React from 'react'
import VideoPlayer from '../../Components/Video';
import './videopage.css'

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
            <div className='videoPage'>
                <div className='videoPlayer'>
                    <VideoPlayer videoId={this.props.match.params.id} />
                </div>
                <form className='videoForm'>
                    <div className='inputs'>
                        <label htmlFor="name">Name</label> <br />
                        <input name='name' type="text" placeholder='name' />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="comment">Comment</label> <br />
                        <input name='comment' type="text" placeholder='...' />
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default VideoPage
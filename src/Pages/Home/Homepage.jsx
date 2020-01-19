import React, { Component } from 'react'
import { apiKey } from '../../secrets'
import Video from '../../Components/Video'
import axios from 'axios'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: []
        }
    }

    handleInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.prevState,
            [e.target.name]: value
        });
    };

    searchVideo = async () => {
        try {
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${this.state.search}&key=${apiKey}`)

            this.setState({
                results: items
            })

        } catch (error) {
            console.log(error);

        }
    }


    renderVideos() {
        return this.state.results.map(el => <Video videoId={el.videoId} />)
    }

    render() {
        console.log(this.state);
        const { results } = this.state

        return (
            <div className='homepage'>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                    <input type="submit" value='search' onClick={this.searchVideo} />
                </form>

                {
                    results.length === 0 ? <div>No Search Results Yet!, Please submit a search above</div> : <Video results={this.state.results} />
                }
            </div>
        )
    }
}
export default HomePage
import React, { Component } from 'react'
import { apiKey } from '../../secrets'
import { Switch, Link, Route } from 'react-router-dom'
// import VideoPlayer from '../../Components/Video'
import VideoPage from '../VideoPage/VideoPage'
import axios from 'axios'

import './HomePage.css'
import VideoPlayer from '../../Components/Video'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: null,
            clicked: false,
            clickedVideo: ''
        }
        // this.clicked = this.clicked.bind(this);
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
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.search}&key=${apiKey}`)

            this.setState({
                results: items
            })

        } catch (error) {
            console.log(error);

        }
    }


    render() {
        console.log("state", this.state);
        console.log('param', window.location.href);
        const { results } = this.state



        return (
            <div className='homepage'>
                <Switch>
                    <Route path='/' />
                    <Route path='/video/:id' component={VideoPage} />
                </Switch>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                    <input type="submit" value='search' onClick={this.searchVideo} />
                </form>
                {results ? <div className='nullResults'>No Search Results Yet!, Please submit a search above</div> : null}
                {this.state.results ? results.map(el => {
                    return (
                        <Link id={el.id.videoId} to={`/video/${el.id.videoId}`}>
                            <div className='thumbnail' id={el.id.videoId} >
                                <img src={el.snippet.thumbnails.medium.url} alt="thumbnail" />
                                <d>{el.snippet.title}</d>
                            </div>
                        </Link>
                    )
                }) : null}
            </div>
        )
    }
}
export default HomePage
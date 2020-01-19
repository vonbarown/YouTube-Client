import React, { Component } from 'react'
import { apiKey } from '../../secrets'
import { Redirect, Link } from 'react-router-dom'
// import VideoPlayer from '../../Components/Video'
import { VideoPage } from '../VideoPage/VideoPage'
import axios from 'axios'

import './HomePage.css'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: [
                // "zvPvqUY2Bt4", "Gg7C4oM8fCQ", "RyvAUshBI6I", "t4IYEXO7ipc", "m_gX31bQTto", "rkmCLxqVdIk", "5hbzEFLTjHY"
            ],
            clicked: false
        }
        this.clicked = this.clicked.bind(this);
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
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${this.state.search}&key=${apiKey}`)

            this.setState({
                results: items
            })

        } catch (error) {
            console.log(error);

        }
    }
    clicked() {
        this.setState({
            clicked: true
        })
    }


    render() {
        console.log(this.state);
        const { results, clicked } = this.state

        const Redirect = () => {
            if (results.length === 0) {
                return <div className='nullResults'>No Search Results Yet!, Please submit a search above</div>
            } else if (clicked) {
                return <VideoPage />
            } else {
                return (
                    results.map(el => {
                        return (
                            <div className='thumbnail' id={el.id.videoId} onClick={this.clicked}>
                                <img src={el.snippet.thumbnails.medium.url} alt="thumbnail" />
                                <p>{el.snippet.title}</p>
                            </div>
                        )
                    })
                )
            }
        }

        return (
            <div className='homepage'>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                    <input type="submit" value='search' onClick={this.searchVideo} />
                </form>
                <div className='display'>
                    <Redirect />
                </div>
            </div>
        )
    }
}
export default HomePage
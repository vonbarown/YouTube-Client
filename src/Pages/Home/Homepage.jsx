import React, { Component } from 'react'
import { apiKey } from '../../secrets'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.css'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: [],
            clicked: false,
            clickedVideo: ''
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
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.search}&key=${apiKey}`)

            this.setState({
                results: items
            })

        } catch (error) {
            console.log(error);

        }
    }


    render() {
        const { results } = this.state

        return (
            <div className='homepage'>

                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                    <input type="submit" value='search' onClick={this.searchVideo} />
                </form>
                {results.length === 0 ? <div className='nullResults'>No Search Results Yet!, Please submit a search above</div> :
                    this.state.results ? results.map(el => {
                        return (
                            <div className='display'>
                                {
                                    <div className='thumbnail'>
                                        <Link id={el.id.videoId} to={`/video/${el.id.videoId}`} params={{ testValue: "hello" }} className='thumbnail'>
                                            <img src={el.snippet.thumbnails.medium.url} alt="thumbnail" />
                                            <d>{el.snippet.title}</d>
                                        </Link>
                                    </div>
                                }
                            </div>
                        )
                    }) : null}
            </div>
        )
    }
}
export default HomePage
import React, { Component } from 'react'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }


    handleInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.prevState,
            [e.target.name]: value
        });
    };

    handleClick = () => {
        console.log('yolo');
    }

    render() {
        console.log(this.state);

        return (
            <div className='homepage'>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                    <input type="submit" value='search' onClick={this.handleClick} />
                </form>
            </div>
        )
    }
}
export default HomePage
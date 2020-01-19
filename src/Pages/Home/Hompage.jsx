import React, { Component } from 'react'

class HomPage extends Component {
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


    render() {
        console.log(this.state);

        return (
            <div className='homepage'>
                <form>
                    <input type="text" name='search' placeholder='search' onChange={this.handleInput} />
                </form>
            </div>
        )
    }
}
export default HomPage
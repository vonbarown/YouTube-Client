import React, { Component } from 'react'

class HomPage extends Component {
    constructor() {
        this.state = {
            searchInput: ''
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
        return (
            <Div className='homepage'>
                hola
            </Div>
        )
    }
}
export default HomPage
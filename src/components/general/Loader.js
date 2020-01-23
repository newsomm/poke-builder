import React, { Component } from 'react'
import '../../styles/Loader.css'

class Loader extends Component {
    render() {
        return (
            <div className="loader" style={{ height: this.props.height, width: this.props.width, padding: this.props.padding }}></div >
        )
    }
}

export default Loader

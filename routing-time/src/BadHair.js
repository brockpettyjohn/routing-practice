import React, { Component } from 'react'

class BadHair extends Component {
    render() {
       console.log(this.props)
        return (
            <div>
                { this.props.newsItems }
            </div>
        )

    }
}
export default BadHair
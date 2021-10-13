import React, { Component } from 'react'
import giphy from './giphy.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-10">
                <img src={giphy} alt="" />
            </div>
        )
    }
}

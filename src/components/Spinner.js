import React, { Component } from 'react'
import giphy from './giphy.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-10">
                <img className="my-3" src={giphy} alt="" />
            </div>
        )
    }
}

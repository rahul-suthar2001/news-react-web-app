import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source  } = this.props;
    return (
      <div>
        <div className="card my-3  text-white bg-dark border-dark " >
        <span class="badge bg-info text-danger ">{source }</span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://image.shutterstock.com/image-photo/man-reading-news-on-tablet-600w-726843034.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">article by : {author?author:"Unknown"} </small></p>
            <p class="card-text"><small class="text-muted">Date : {date.slice(0,10)} </small></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
       
  
        
        </div>
      </div>
    );
  }
}

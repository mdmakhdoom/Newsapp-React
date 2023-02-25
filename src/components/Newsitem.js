import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url, author, source, date} = this.props;
    return (
      <div>
        <div className="card border-dark">
            <img src={!imageUrl?"https://source.unsplash.com/1200x630/?us":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} <span class="badge rounded-pill text-bg-warning">{source}</span></h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toUTCString()}</small></p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

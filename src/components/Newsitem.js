import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url, author, data} = this.props;
    return (
      <div>
        <div className="card border-dark">
            <img src={!imageUrl?"https://source.unsplash.com/1200x630/?us":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                <p class="card-text"><small class="text-muted">By {author} on {data}</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

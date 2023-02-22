import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://source.unsplash.com/250x250/?tech":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem

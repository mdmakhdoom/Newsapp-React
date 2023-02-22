import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class News extends Component {
  articles = [
    {
      "source": {"id": "associated-press", "name": "Associated Press"},
      "author": "The Associated Press",
      "title": "Putin ups tensions over Ukraine, suspending START nuke pact - The Associated Press - en Español",
      "description": "Russian President Vladimir Putin suspended Moscow’s participation in the last remaining nuclear arms control pact with the U.S., announcing the move Tuesday in a bitter speech where he made clear he would not change his strategy in the war in Ukraine .",
      "url": "https://apnews.com/article/russia-ukraine-putin-politics-de0af48be7ea480ccb0175f55a065363",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/c87fb64956344d41b40ea29723801996/3000.jpeg",
      "publishedAt": "2023-02-21T14:06:13Z",
      "content": "Russian President Vladimir Putin suspended Moscows participation in the last remaining nuclear arms control pact with the U.S., announcing the move Tuesday in a bitter speech where he made clear he w… [+6018 chars]"
      },
      {
        "source": {"id": "the-washington-post", "name": "The Washington Post"},
        "author": "Meagan Flynn",
        "title": "McClellan (D) takes on Benjamin (R) in Virginia 4th District - The Washington Post",
        "description": "McClellan takes on conservative pastor Leon Benjamin in the 4th District special election to fill the seat of U.S. Rep. A Donald McEachin (D), who died in November.",
        "url": "https://www.washingtonpost.com/dc-md-va/2023/02/21/virginia-4th-congressional-district-race/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DJA5JSGJF3XLEYTQCSPAHRMOAA.JPG&w=1440",
        "publishedAt": "2023-02-21T14:00:00Z",
        "content": "Comment on this story\r\nVirginians are heading to the polls in what could be a historic special election on Tuesday, with state Sen. Jennifer L. McClellan (D-Richmond) vying to become Virginias first … [+2004 chars]"
        },
  ]
  constructor(){
    super();
    console.log("Hello constructor");
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>News - India top Bollywood Headline</h1>
        <div className="row my-4">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title.slice(0, 90)} description={element.description.slice(0, 50)} imageUrl="https://source.unsplash.com/250x250/?adobe" url={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News

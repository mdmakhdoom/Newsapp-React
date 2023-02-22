import React, { Component } from 'react'
import Newsitem from './Newsitem';

export class News extends Component {
  // articles = []
  constructor(){
    super();
    console.log("Hello constructor");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("Helw");
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c9226c17120d49ea971e9697b6118820";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>News - India top Bollywood Headline</h1>
        <div className="row my-5">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4 mb-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News

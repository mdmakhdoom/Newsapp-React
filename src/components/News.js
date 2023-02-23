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
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    console.log("Helw");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9226c17120d49ea971e9697b6118820";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePreClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9226c17120d49ea971e9697b6118820&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9226c17120d49ea971e9697b6118820&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - United States Top Business Headline</h1>
        <div className="row my-5">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4 mb-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreClick}>&laquo; Previous</button>
        <button type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News

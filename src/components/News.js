import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }
  static defaultProps = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string,
  }
  capitlizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
    document.title = `${this.capitlizeFirstLetter(this.props.category)} - NewsApp`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9226c17120d49ea971e9697b6118820&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c9226c17120d49ea971e9697b6118820&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePreClick = async ()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }
  handleNextClick = async ()=>{
    setState({page: this.state.page + 1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsApp - United States Top {this.capitlizeFirstLetter(this.props.category)} Headline</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-5">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4 mb-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePreClick}>&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News

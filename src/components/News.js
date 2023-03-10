import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  News.defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }
  News.defaultProps = {
   country: PropTypes.string,
   pageSize: PropTypes.number,
   category: PropTypes.string,
  }
  const capitlizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const updateNews = async ()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c9226c17120d49ea971e9697b6118820&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(20);
    let parsedData = await data.json()
    console.log(parsedData);
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitlizeFirstLetter(props.category)} - NewsApp`;
    updateNews();
    // eslint-disable-line 
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c9226c17120d49ea971e9697b6118820&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  
    return (
      <div className="container my-auto">
        <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsApp - United States Top {capitlizeFirstLetter(props.category)} Headline</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className="row my-5">
        {articles.map((element)=>{
          return <div className="col-md-4 mb-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
      )
    }

export default News

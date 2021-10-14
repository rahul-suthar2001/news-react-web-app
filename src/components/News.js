import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps ={
       country : "in",
       pageSize : 3
    }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title  = `NewX - ${this.captilize(this.props.category)}  `
  }
  captilize = (string)=>{
        string = string.toUpperCase();
        return string.charAt(0)+string.toLowerCase().slice(1);
  }
  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResults,
      loading:false
    });
    this.props.setProgress(100);
  }
  
  fetchMoreData = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page :this.state.page +1,
      articles:this.state.articles.concat(parseData.articles),
      totalResult: parseData.totalResults,
     
      loading:false
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center " style ={{margin:'35px 0px',marginTop:'90px'}} >{this.captilize(this.props.category)} - Top Headline</h1>
      
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row ">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author ={element.author}
                  date ={element.publishedAt}
                  source  = {element.source.name}
                  
                />
              </div>
            
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
       
      </>
    );
  }
}

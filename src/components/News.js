import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
    static defaultProps ={
       country : "in",
       pageSize : 8
    }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dda9f86156904432b3602cafeaa79618&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResults,
      loading:false
    });
  }
  handleNext = async () => {
  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dda9f86156904432b3602cafeaa79618&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});

      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading:false
      });

  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dda9f86156904432b3602cafeaa79618&&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1, loading:false });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="my-4 text-center ">Latesh News</h1>
       {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="contianer d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrev}
            className="btn btn-dark"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)
            }
            onClick={this.handleNext}
            className="btn btn-dark"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

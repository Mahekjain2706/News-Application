import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    // Math.ceil give you approx items ex: 4.6 -> 5 etc
    static defaultProps = {
      country: 'in',
      pageSize: '10',
      category: 'general',
      Ccolor: 'primary'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        Ccolor: PropTypes.string,
      }
  
    constructor() {
        super();
        // console.log('Hello i am a coonstructor!')
        this.state = {
            articles: [],
            loading: false,
            page:1,
        }
    }
    // In this first render function work then cdm
    // async function wait for resolve promises/ fetching api.

    async updateNews(pageNo){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
         this.setState({loading: true});
         let data =await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData);
         this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults,loading:false})
    }

    async componentDidMount(){
        //  console.log("cdm");
        //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=1&pageSize=${this.props.pageSize}`;
        //  this.setState({loading: true});
        //  let data =await fetch(url);
        //  let parsedData = await data.json()
        //  console.log(parsedData);
        //  this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults,loading:false})
        this.updateNews();
    }

    preClick = async ()=>{
        // console.log("Previous")
        // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data =await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles : parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    nextClick = async (props)=>{
        // console.log("Next");
        // let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        //  let data =await fetch(url);
        //  let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page + 1,
        //     articles : parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        // console.log("render");
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMoney - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row my-3">
                    { !this.state.loading && this.state.articles.map((element)=>{
                      return <div className="col md-4  my-2" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name} Ccolor={this.props.Ccolor}/>
                    </div>  
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.preClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // Math.ceil give you approx items ex: 4.6 -> 5 etc
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
    // async function wait for resolve promises/ fetching api .
    async componentDidMount(){
        //  console.log("cdm");
         let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=1&pageSize=20";
         let data =await fetch(url);
         let parsedData = await data.json()
         console.log(parsedData);
         this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})
    }

    preClick = async ()=>{
        console.log("Previous")
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=${this.state.page - 1}&pageSize=20`;
        let data =await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles
        })
    }

    nextClick = async ()=>{
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=30e5f29bf3e445fd89c158288e6b28f2&page=${this.state.page + 1}&pageSize=20`;
         let data =await fetch(url);
         let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles : parsedData.articles
        })
        }
    }

    render() {
        // console.log("render");
        return (
            <div className="container my-3">
                <h1>NewsMoney - Top Headlines</h1>
                
                <div className="row my-3">
                    {this.state.articles.map((element)=>{
                      return <div className="col md-4  my-2" key={element.url} >
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>  
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-dark" disabled={this.state.page<=1} onClick={this.preClick}> &larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.nextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News

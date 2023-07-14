import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'General',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
   
    constructor(){
        super();
        this.state = {
                    articles: [],
                    loading: false,
                    page:1
        }
    }

    async updateNews(){
        //Refactoring

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=587272a3f25741de99d66c59a0c7341a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       this.setState({loading: true})
       let data = await fetch(url);
       let parsedData = await data.json()
       console.log(parsedData);
       
       this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading:false})

    }

    async componentDidMount(){
    //    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=587272a3f25741de99d66c59a0c7341a&pageSize=${this.props.pageSize}`;
    //    this.setState({loading: true})
    //    let data = await fetch(url);
    //    let parsedData = await data.json()
    //    console.log(parsedData);

    //    this.setState({articles: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loading:false})

    //Refactoring
    this.updateNews();
    }


    handlePrevClick = async ()=>{
        console.log("Previous");

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=587272a3f25741de99d66c59a0c7341a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false,
        // })


        //Refactoring
        this.setState({page: this.state.page - 1});
        this.updateNews();

    }

    handleNextClick = async ()=>{
        console.log("Next");

        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=587272a3f25741de99d66c59a0c7341a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading: true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData);
            
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false,
        //     })
        // }


        //Refactoring
        this.setState({page: this.state.page + 1});
        this.updateNews();

    }

    render() {
        return (
            
            <div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}

                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}

                    
                </div>

                <div className="container d-flex justify-content-between" style={{margin: '40px 0'}}>
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
                </div>

            </div>
        
        )
    }
}

export default News
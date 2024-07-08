import React, { Component } from "react";
import Newsitem from "./Newsitem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from 'prop-types'

export class Newsbox extends Component {
  static defaultProps = {                 //Default prop types of class based component
    country : "in",
    pagesize : 9,
    category : "general"
  
  }
  static propTypes = {                    //Proptypes of class based component
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }


    constructor(){                  
        super();
        this.state = {
            articles : [],
            loading : false
        };
    }

    async componentDidMount(){
      await this.setState({pagesize:this.props.pagesize});
      await this.setState({page:1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5855c9412ccf4b6d841272ac6521edb8&page=${this.state.page}&pagesize=${this.state.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:parsedData.articles,
        totalresult:parsedData.totalResults,
        loading:false
      });
    }
    nextpage = async () =>{
      if(this.state.page < Math.ceil(this.state.totalresult/this.state.pagesize)){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5855c9412ccf4b6d841272ac6521edb8&page=${this.state.page + 1}&pagesize=${this.state.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page : this.state.page + 1,
          articles : parsedData.articles,
          loading:false
        })
      }
    }
    prevpage = async () =>{
      if(this.state.page > 1){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5855c9412ccf4b6d841272ac6521edb8&page=${this.state.page - 1}&pagesize=${this.state.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          page : this.state.page - 1,
          articles : parsedData.articles,
          loading:false
        })
      }
    }

  render() {       //when using MAP and itrating element,.. every element should have unique key
    return (
      <div className="container my-3">
        <h1>NEWs App</h1>
        {this.state.loading && <LoadingSpinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} newsurl={element.url} imgurl={element.urlToImage?element.urlToImage:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/07/wdwer-1719912897.jpg"}/>
            </div>
          })}

        </div>
          <div className="container d-flex justify-content-around my-4">
            <button type="button" disabled={this.state.page===1} onClick={this.prevpage} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalresult/this.state.pagesize)} onClick={this.nextpage} className="btn btn-dark"> Next &rarr;</button>
          </div>
      </div>
    );
  }
}

export default Newsbox;
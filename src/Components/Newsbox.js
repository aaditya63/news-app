import React, { Component } from "react";
import Newsitem from "./Newsitem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
            loading : false,
        };
    }

    async updateNews(pagechange){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5855c9412ccf4b6d841272ac6521edb8&page=${this.state.page + pagechange}&pagesize=${this.state.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:parsedData.articles,
        loading:false,
        totalResults:parsedData.totalResults,
        page:this.state.page+pagechange,
      });
    }
    async componentDidMount(){
      await this.setState({pagesize:this.props.pagesize,totalResults:1});
      await this.setState({page:1})
      this.updateNews(0);
    }
    fetchData = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5855c9412ccf4b6d841272ac6521edb8&page=${this.state.page + 1}&pagesize=${this.state.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        loading:false,
        totalresult:parsedData.totalResults,
        page:this.state.page+1
      });
    }

  render() {       //when using MAP and itrating element,.. every element should have unique key
    return (
      <>
        <h3 style={{textAlign:"center", padding:"10px"}}>News-App | Top {`${this.props.category}`.slice(0,1).toUpperCase()}{`${this.props.category}`.slice(1)} Headlines</h3>

        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.page*this.state.pagesize < this.state.totalResults}
          loader={<LoadingSpinner/>}
          endMessage={<p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
          </p>}>
        <div className="container">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} newsurl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt}  imgurl={element.urlToImage?element.urlToImage:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/07/wdwer-1719912897.jpg"}/>
            </div>
          })}
        </div>
        </div>

        </InfiniteScroll>
      </>
    );
  }
}

export default Newsbox;
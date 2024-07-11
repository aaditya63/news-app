import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl,author,date} = this.props;    //using props for Class,.. we have to use "this" keyword with props or destructure here
    return (
        <div className="card" style={{marginTop:"5px"}}>
            <img src={imgurl} className="card-img-top" alt=""/>
            <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}{title.length>40?"...":""}</h5>
            <p className="card-text">{description.slice(0,80)}{description.length>80?"...":""}</p>
            <p className='card-text'><small className='text-muted'>By {author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    );
  }
}

export default Newsitem
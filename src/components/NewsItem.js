import React, { Component } from 'react'

// constructor run when we use super in it.
export class NewsItem extends Component {
    //    constructor(){
    //     super();
    //     console.log('Hello i am a coonstructor!')
    //    }

    render() {
        let {title, description,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div  className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://www.techexplorist.com/wp-content/uploads/2023/01/neutron-star-merger.jpg":imageUrl}className="card-img-top" alt="..." />
                    <div  className="card-body">
                        <h5  className="card-title">{title}...</h5>
                        <p  className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

import React from "react";

function Card(props){
    return(
        <>
        <div className="Cards">
            <div className="Card">
                <img className="card-img" src={props.imgsrc}/>
                <div className="card-info">
                    <span className="card-category">{props.category}</span>
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-desc">{props.desc}</p>
                    <a className="link" href={props.link} target="_blank">
                        <button>See More</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
import React from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({props}) => (
  <div id="myCarousel" className="carousel slide"  style={{marginTop: "-20px"}} data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src={require('../static/s1.jpg')} alt="Los Angeles" style={{width:"100%",height:"500px"}} />
      </div>

      <div className="item">
        <img src={require('../static/s2.jpg')} alt="Chicago" style={{width:"100%",height:"500px"}} />
      </div>
    
      <div className="item">
        <img src={require('../static/s3.jpg')} alt="New york" style={{width:"100%",height:"500px"}} />
      </div>
    </div>

   
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
 
  
);
export default Slider;

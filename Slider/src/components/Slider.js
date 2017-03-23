import React,{Component} from 'react';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';

class Slider extends Component {
   
   
    render () {
        return (
             
          <React_Boostrap_Carousel animation={true} className="carousel-fade">
    			<img style={{width:"100%"}} src="../images/banner1.jpg"/>	
    			<img style={{width:"100%"}} src="../images/banner2.jpg"/>	
    			<img style={{width:"100%"}} src="../images/banner3.jpg"/>	          
          </React_Boostrap_Carousel>
       
        )
    }
}

export default Slider





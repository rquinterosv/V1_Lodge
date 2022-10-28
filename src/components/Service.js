import React, {Component} from "react";
import img1 from '../img/img1.jpg';
import 'flowbite';
import ServiceInfo from "./ServiceInfo";
import Carousel1 from "./Carousel1";

class Service extends Component {
    render(){
        return(
            <><Carousel1 /><ServiceInfo /></>
        )
    }
}

export default Service; 

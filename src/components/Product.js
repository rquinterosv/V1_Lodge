import React, {Component} from "react";
import img1 from '../img/img1.jpg';
import 'flowbite';

class Product extends Component {
    render(){
        return(
            <div className="card card-side  bg-gray-100 shadow-xl p-5">

                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>

                <figure><img src={img1} className="h-56 w-30 object-cover sm:h-72 md:h-96 lg:h-full lg:w-60 rounded-lg" alt="Movie"/></figure>
                </div>

        )
    }
}

export default Product; 

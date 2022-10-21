import React,{Component} from "react";
import MapContainer from "./MapContainer";
import img4 from './img/img4.jpg';
import letras from './img/letras.png'

class Info extends Component {
    render(){
        return(
            <section class="text-gray-600 body-font  bg-verde">

                <div class="container px-5 mx-auto flex flex-wrap">

                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-6">

                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 p-5">

                                <img src={letras} alt="letras lodge"></img>

                                <h3 className="text-base text-azul md:text-lg mt-10">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 ">
                        <MapContainer />
                    </div>

                </div>
                </section>
        )
    }
}
export default Info;
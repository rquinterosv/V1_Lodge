import React,{Component} from "react";
import MapContainer from "./MapContainer";
import img4 from './img/img4.jpg';
import letras from './img/letras.png'

class Info extends Component {
    render(){
        return(
            <section class="text-gray-600 body-font  bg-gray-100">

                <div class="container px-5 mx-auto flex flex-wrap">

                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div class="w-full sm:p-4 px-4 mb-4">

                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 p-5">

                                <img src={letras} alt="letras lodge"></img>

                                <h3 className="text-base text-azul md:text-lg mt-6">
                                Cercano a las atracciones turísticas más visitadas en la zona, ofrecemos 20 habitaciones con vista al lago Llanquihue y un ambiente tranquilo para disfrutar la tranquilidad del Sur de Chile. </h3>

                                <div class="mt-5">
                                    <a
                                    href="https://lodgelascascadas.cl/"
                                        className="font-bold py-2 px-4 rounded-full  text-azul hover:bg-azul hover:text-verde bg-verde"
                                    >
                                    Reservar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden lg:mt-10">
                        <MapContainer />
                    </div>

                </div>
                </section>
        )
    }
}
export default Info;